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
export var CertificateMapEntryMatcherEnum;
(function (CertificateMapEntryMatcherEnum) {
    CertificateMapEntryMatcherEnum["MatcherUnspecified"] = "MATCHER_UNSPECIFIED";
    CertificateMapEntryMatcherEnum["Primary"] = "PRIMARY";
})(CertificateMapEntryMatcherEnum || (CertificateMapEntryMatcherEnum = {}));
export var CertificateMapEntryStateEnum;
(function (CertificateMapEntryStateEnum) {
    CertificateMapEntryStateEnum["ServingStateUnspecified"] = "SERVING_STATE_UNSPECIFIED";
    CertificateMapEntryStateEnum["Active"] = "ACTIVE";
    CertificateMapEntryStateEnum["Pending"] = "PENDING";
})(CertificateMapEntryStateEnum || (CertificateMapEntryStateEnum = {}));
// CertificateMapEntryInput
/**
 * Defines a certificate map entry.
**/
var CertificateMapEntryInput = /** @class */ (function (_super) {
    __extends(CertificateMapEntryInput, _super);
    function CertificateMapEntryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], CertificateMapEntryInput.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CertificateMapEntryInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], CertificateMapEntryInput.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateMapEntryInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matcher" }),
        __metadata("design:type", String)
    ], CertificateMapEntryInput.prototype, "matcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateMapEntryInput.prototype, "name", void 0);
    return CertificateMapEntryInput;
}(SpeakeasyBase));
export { CertificateMapEntryInput };
// CertificateMapEntry
/**
 * Defines a certificate map entry.
**/
var CertificateMapEntry = /** @class */ (function (_super) {
    __extends(CertificateMapEntry, _super);
    function CertificateMapEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], CertificateMapEntry.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateMapEntry.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matcher" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "matcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CertificateMapEntry.prototype, "updateTime", void 0);
    return CertificateMapEntry;
}(SpeakeasyBase));
export { CertificateMapEntry };
