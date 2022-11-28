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
export var SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum;
(function (SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum) {
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryUnspecified"] = "SENSITIVE_CATEGORY_UNSPECIFIED";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryAdult"] = "SENSITIVE_CATEGORY_ADULT";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDerogatory"] = "SENSITIVE_CATEGORY_DEROGATORY";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDownloadsSharing"] = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryWeapons"] = "SENSITIVE_CATEGORY_WEAPONS";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryGambling"] = "SENSITIVE_CATEGORY_GAMBLING";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryViolence"] = "SENSITIVE_CATEGORY_VIOLENCE";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategorySuggestive"] = "SENSITIVE_CATEGORY_SUGGESTIVE";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryProfanity"] = "SENSITIVE_CATEGORY_PROFANITY";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryAlcohol"] = "SENSITIVE_CATEGORY_ALCOHOL";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDrugs"] = "SENSITIVE_CATEGORY_DRUGS";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTobacco"] = "SENSITIVE_CATEGORY_TOBACCO";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryPolitics"] = "SENSITIVE_CATEGORY_POLITICS";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryReligion"] = "SENSITIVE_CATEGORY_RELIGION";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTragedy"] = "SENSITIVE_CATEGORY_TRAGEDY";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTransportationAccidents"] = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategorySensitiveSocialIssues"] = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES";
    SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryShocking"] = "SENSITIVE_CATEGORY_SHOCKING";
})(SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum || (SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum = {}));
// SensitiveCategoryTargetingOptionDetails
/**
 * Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
var SensitiveCategoryTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(SensitiveCategoryTargetingOptionDetails, _super);
    function SensitiveCategoryTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategory" }),
        __metadata("design:type", String)
    ], SensitiveCategoryTargetingOptionDetails.prototype, "sensitiveCategory", void 0);
    return SensitiveCategoryTargetingOptionDetails;
}(SpeakeasyBase));
export { SensitiveCategoryTargetingOptionDetails };
