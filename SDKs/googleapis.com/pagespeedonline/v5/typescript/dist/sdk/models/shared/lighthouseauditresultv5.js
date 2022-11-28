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
// LighthouseAuditResultV5
/**
 * An audit's result object in a Lighthouse result.
**/
var LighthouseAuditResultV5 = /** @class */ (function (_super) {
    __extends(LighthouseAuditResultV5, _super);
    function LighthouseAuditResultV5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Map)
    ], LighthouseAuditResultV5.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayValue" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericUnit" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "numericUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericValue" }),
        __metadata("design:type", Number)
    ], LighthouseAuditResultV5.prototype, "numericValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Object)
    ], LighthouseAuditResultV5.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoreDisplayMode" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "scoreDisplayMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LighthouseAuditResultV5.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings" }),
        __metadata("design:type", Object)
    ], LighthouseAuditResultV5.prototype, "warnings", void 0);
    return LighthouseAuditResultV5;
}(SpeakeasyBase));
export { LighthouseAuditResultV5 };
