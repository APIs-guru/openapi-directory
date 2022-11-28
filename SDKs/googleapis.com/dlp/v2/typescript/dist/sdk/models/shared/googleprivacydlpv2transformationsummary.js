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
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldTransformation } from "./googleprivacydlpv2fieldtransformation";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2RecordSuppression } from "./googleprivacydlpv2recordsuppression";
import { GooglePrivacyDlpV2SummaryResult } from "./googleprivacydlpv2summaryresult";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
// GooglePrivacyDlpV2TransformationSummary
/**
 * Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
**/
var GooglePrivacyDlpV2TransformationSummary = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2TransformationSummary, _super);
    function GooglePrivacyDlpV2TransformationSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", GooglePrivacyDlpV2FieldId)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldTransformations", elemType: GooglePrivacyDlpV2FieldTransformation }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "fieldTransformations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoType" }),
        __metadata("design:type", GooglePrivacyDlpV2InfoType)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "infoType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordSuppress" }),
        __metadata("design:type", GooglePrivacyDlpV2RecordSuppression)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "recordSuppress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GooglePrivacyDlpV2SummaryResult }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformation" }),
        __metadata("design:type", GooglePrivacyDlpV2PrimitiveTransformation)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "transformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformedBytes" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2TransformationSummary.prototype, "transformedBytes", void 0);
    return GooglePrivacyDlpV2TransformationSummary;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2TransformationSummary };
