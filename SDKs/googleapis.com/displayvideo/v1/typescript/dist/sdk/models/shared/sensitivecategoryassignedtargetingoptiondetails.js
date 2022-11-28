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
export var SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum;
(function (SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum) {
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryUnspecified"] = "SENSITIVE_CATEGORY_UNSPECIFIED";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryAdult"] = "SENSITIVE_CATEGORY_ADULT";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDerogatory"] = "SENSITIVE_CATEGORY_DEROGATORY";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDownloadsSharing"] = "SENSITIVE_CATEGORY_DOWNLOADS_SHARING";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryWeapons"] = "SENSITIVE_CATEGORY_WEAPONS";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryGambling"] = "SENSITIVE_CATEGORY_GAMBLING";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryViolence"] = "SENSITIVE_CATEGORY_VIOLENCE";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategorySuggestive"] = "SENSITIVE_CATEGORY_SUGGESTIVE";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryProfanity"] = "SENSITIVE_CATEGORY_PROFANITY";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryAlcohol"] = "SENSITIVE_CATEGORY_ALCOHOL";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryDrugs"] = "SENSITIVE_CATEGORY_DRUGS";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTobacco"] = "SENSITIVE_CATEGORY_TOBACCO";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryPolitics"] = "SENSITIVE_CATEGORY_POLITICS";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryReligion"] = "SENSITIVE_CATEGORY_RELIGION";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTragedy"] = "SENSITIVE_CATEGORY_TRAGEDY";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryTransportationAccidents"] = "SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategorySensitiveSocialIssues"] = "SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES";
    SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum["SensitiveCategoryShocking"] = "SENSITIVE_CATEGORY_SHOCKING";
})(SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum || (SensitiveCategoryAssignedTargetingOptionDetailsSensitiveCategoryEnum = {}));
// SensitiveCategoryAssignedTargetingOptionDetails
/**
 * Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
var SensitiveCategoryAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(SensitiveCategoryAssignedTargetingOptionDetails, _super);
    function SensitiveCategoryAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedTargetingOptionId" }),
        __metadata("design:type", String)
    ], SensitiveCategoryAssignedTargetingOptionDetails.prototype, "excludedTargetingOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategory" }),
        __metadata("design:type", String)
    ], SensitiveCategoryAssignedTargetingOptionDetails.prototype, "sensitiveCategory", void 0);
    return SensitiveCategoryAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { SensitiveCategoryAssignedTargetingOptionDetails };
// SensitiveCategoryAssignedTargetingOptionDetailsInput
/**
 * Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.
**/
var SensitiveCategoryAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(SensitiveCategoryAssignedTargetingOptionDetailsInput, _super);
    function SensitiveCategoryAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedTargetingOptionId" }),
        __metadata("design:type", String)
    ], SensitiveCategoryAssignedTargetingOptionDetailsInput.prototype, "excludedTargetingOptionId", void 0);
    return SensitiveCategoryAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { SensitiveCategoryAssignedTargetingOptionDetailsInput };
