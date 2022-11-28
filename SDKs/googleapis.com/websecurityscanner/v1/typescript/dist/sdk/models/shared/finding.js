var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";
import { Xxe } from "./xxe";
export var FindingSeverityEnum;
(function (FindingSeverityEnum) {
    FindingSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    FindingSeverityEnum["Critical"] = "CRITICAL";
    FindingSeverityEnum["High"] = "HIGH";
    FindingSeverityEnum["Medium"] = "MEDIUM";
    FindingSeverityEnum["Low"] = "LOW";
})(FindingSeverityEnum || (FindingSeverityEnum = {}));
// Finding
/**
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
var Finding = /** @class */ (function (_super) {
    __extends(Finding, _super);
    function Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], Finding.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Finding.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalUrl" }),
        __metadata("design:type", String)
    ], Finding.prototype, "finalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingType" }),
        __metadata("design:type", String)
    ], Finding.prototype, "findingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form" }),
        __metadata("design:type", Form)
    ], Finding.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameUrl" }),
        __metadata("design:type", String)
    ], Finding.prototype, "frameUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fuzzedUrl" }),
        __metadata("design:type", String)
    ], Finding.prototype, "fuzzedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], Finding.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Finding.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outdatedLibrary" }),
        __metadata("design:type", OutdatedLibrary)
    ], Finding.prototype, "outdatedLibrary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reproductionUrl" }),
        __metadata("design:type", String)
    ], Finding.prototype, "reproductionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Finding.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingId" }),
        __metadata("design:type", String)
    ], Finding.prototype, "trackingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violatingResource" }),
        __metadata("design:type", ViolatingResource)
    ], Finding.prototype, "violatingResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerableHeaders" }),
        __metadata("design:type", VulnerableHeaders)
    ], Finding.prototype, "vulnerableHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerableParameters" }),
        __metadata("design:type", VulnerableParameters)
    ], Finding.prototype, "vulnerableParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xss" }),
        __metadata("design:type", Xss)
    ], Finding.prototype, "xss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xxe" }),
        __metadata("design:type", Xxe)
    ], Finding.prototype, "xxe", void 0);
    return Finding;
}(SpeakeasyBase));
export { Finding };
