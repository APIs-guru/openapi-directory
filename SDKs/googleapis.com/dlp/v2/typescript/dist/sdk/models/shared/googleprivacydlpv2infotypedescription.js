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
import { GooglePrivacyDlpV2InfoTypeCategory } from "./googleprivacydlpv2infotypecategory";
import { GooglePrivacyDlpV2SensitivityScore } from "./googleprivacydlpv2sensitivityscore";
import { GooglePrivacyDlpV2VersionDescription } from "./googleprivacydlpv2versiondescription";
export var GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum;
(function (GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum) {
    GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum["EnumTypeUnspecified"] = "ENUM_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum["Inspect"] = "INSPECT";
    GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum["RiskAnalysis"] = "RISK_ANALYSIS";
})(GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum || (GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = {}));
// GooglePrivacyDlpV2InfoTypeDescription
/**
 * InfoType description.
**/
var GooglePrivacyDlpV2InfoTypeDescription = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InfoTypeDescription, _super);
    function GooglePrivacyDlpV2InfoTypeDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: GooglePrivacyDlpV2InfoTypeCategory }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitivityScore" }),
        __metadata("design:type", GooglePrivacyDlpV2SensitivityScore)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "sensitivityScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedBy" }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "supportedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versions", elemType: GooglePrivacyDlpV2VersionDescription }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2InfoTypeDescription.prototype, "versions", void 0);
    return GooglePrivacyDlpV2InfoTypeDescription;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InfoTypeDescription };
