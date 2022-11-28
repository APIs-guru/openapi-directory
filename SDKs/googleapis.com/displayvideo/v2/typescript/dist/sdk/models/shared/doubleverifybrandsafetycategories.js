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
export var DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
(function (DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum) {
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["HigherSeverityUnspecified"] = "HIGHER_SEVERITY_UNSPECIFIED";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["AdultContentPornography"] = "ADULT_CONTENT_PORNOGRAPHY";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["CopyrightInfringement"] = "COPYRIGHT_INFRINGEMENT";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["SubstanceAbuse"] = "SUBSTANCE_ABUSE";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["GraphicViolenceWeapons"] = "GRAPHIC_VIOLENCE_WEAPONS";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["HateProfanity"] = "HATE_PROFANITY";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["CriminalSkills"] = "CRIMINAL_SKILLS";
    DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum["NuisanceIncentivizedMalwareClutter"] = "NUISANCE_INCENTIVIZED_MALWARE_CLUTTER";
})(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum || (DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum = {}));
export var DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
(function (DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum) {
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["MediumSeverityUnspecified"] = "MEDIUM_SEVERITY_UNSPECIFIED";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["AdServers"] = "AD_SERVERS";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["AdultContentSwimsuit"] = "ADULT_CONTENT_SWIMSUIT";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["AlternativeLifestyles"] = "ALTERNATIVE_LIFESTYLES";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["CelebrityGossip"] = "CELEBRITY_GOSSIP";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["Gambling"] = "GAMBLING";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["Occult"] = "OCCULT";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["SexEducation"] = "SEX_EDUCATION";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["DisasterAviation"] = "DISASTER_AVIATION";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["DisasterManMade"] = "DISASTER_MAN_MADE";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["DisasterNatural"] = "DISASTER_NATURAL";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["DisasterTerroristEvents"] = "DISASTER_TERRORIST_EVENTS";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["DisasterVehicle"] = "DISASTER_VEHICLE";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["Alcohol"] = "ALCOHOL";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["Smoking"] = "SMOKING";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["NegativeNewsFinancial"] = "NEGATIVE_NEWS_FINANCIAL";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["NonEnglish"] = "NON_ENGLISH";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["ParkingPage"] = "PARKING_PAGE";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["UnmoderatedUgc"] = "UNMODERATED_UGC";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["InflammatoryPoliticsAndNews"] = "INFLAMMATORY_POLITICS_AND_NEWS";
    DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum["NegativeNewsPharmaceutical"] = "NEGATIVE_NEWS_PHARMACEUTICAL";
})(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum || (DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum = {}));
// DoubleVerifyBrandSafetyCategories
/**
 * Settings for brand safety controls.
**/
var DoubleVerifyBrandSafetyCategories = /** @class */ (function (_super) {
    __extends(DoubleVerifyBrandSafetyCategories, _super);
    function DoubleVerifyBrandSafetyCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidUnknownBrandSafetyCategory" }),
        __metadata("design:type", Boolean)
    ], DoubleVerifyBrandSafetyCategories.prototype, "avoidUnknownBrandSafetyCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidedHighSeverityCategories" }),
        __metadata("design:type", Array)
    ], DoubleVerifyBrandSafetyCategories.prototype, "avoidedHighSeverityCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidedMediumSeverityCategories" }),
        __metadata("design:type", Array)
    ], DoubleVerifyBrandSafetyCategories.prototype, "avoidedMediumSeverityCategories", void 0);
    return DoubleVerifyBrandSafetyCategories;
}(SpeakeasyBase));
export { DoubleVerifyBrandSafetyCategories };
