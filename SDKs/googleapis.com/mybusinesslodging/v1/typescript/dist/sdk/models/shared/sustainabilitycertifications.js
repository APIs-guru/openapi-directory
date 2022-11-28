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
import { EcoCertification } from "./ecocertification";
export var SustainabilityCertificationsBreeamCertificationEnum;
(function (SustainabilityCertificationsBreeamCertificationEnum) {
    SustainabilityCertificationsBreeamCertificationEnum["BreeamCertificationUnspecified"] = "BREEAM_CERTIFICATION_UNSPECIFIED";
    SustainabilityCertificationsBreeamCertificationEnum["NoBreeamCertification"] = "NO_BREEAM_CERTIFICATION";
    SustainabilityCertificationsBreeamCertificationEnum["BreeamPass"] = "BREEAM_PASS";
    SustainabilityCertificationsBreeamCertificationEnum["BreeamGood"] = "BREEAM_GOOD";
    SustainabilityCertificationsBreeamCertificationEnum["BreeamVeryGood"] = "BREEAM_VERY_GOOD";
    SustainabilityCertificationsBreeamCertificationEnum["BreeamExcellent"] = "BREEAM_EXCELLENT";
    SustainabilityCertificationsBreeamCertificationEnum["BreeamOutstanding"] = "BREEAM_OUTSTANDING";
})(SustainabilityCertificationsBreeamCertificationEnum || (SustainabilityCertificationsBreeamCertificationEnum = {}));
export var SustainabilityCertificationsBreeamCertificationExceptionEnum;
(function (SustainabilityCertificationsBreeamCertificationExceptionEnum) {
    SustainabilityCertificationsBreeamCertificationExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainabilityCertificationsBreeamCertificationExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainabilityCertificationsBreeamCertificationExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainabilityCertificationsBreeamCertificationExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainabilityCertificationsBreeamCertificationExceptionEnum || (SustainabilityCertificationsBreeamCertificationExceptionEnum = {}));
export var SustainabilityCertificationsLeedCertificationEnum;
(function (SustainabilityCertificationsLeedCertificationEnum) {
    SustainabilityCertificationsLeedCertificationEnum["LeedCertificationUnspecified"] = "LEED_CERTIFICATION_UNSPECIFIED";
    SustainabilityCertificationsLeedCertificationEnum["NoLeedCertification"] = "NO_LEED_CERTIFICATION";
    SustainabilityCertificationsLeedCertificationEnum["LeedCertified"] = "LEED_CERTIFIED";
    SustainabilityCertificationsLeedCertificationEnum["LeedSilver"] = "LEED_SILVER";
    SustainabilityCertificationsLeedCertificationEnum["LeedGold"] = "LEED_GOLD";
    SustainabilityCertificationsLeedCertificationEnum["LeedPlatinum"] = "LEED_PLATINUM";
})(SustainabilityCertificationsLeedCertificationEnum || (SustainabilityCertificationsLeedCertificationEnum = {}));
export var SustainabilityCertificationsLeedCertificationExceptionEnum;
(function (SustainabilityCertificationsLeedCertificationExceptionEnum) {
    SustainabilityCertificationsLeedCertificationExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    SustainabilityCertificationsLeedCertificationExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    SustainabilityCertificationsLeedCertificationExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    SustainabilityCertificationsLeedCertificationExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(SustainabilityCertificationsLeedCertificationExceptionEnum || (SustainabilityCertificationsLeedCertificationExceptionEnum = {}));
// SustainabilityCertifications
/**
 * Sustainability certifications the hotel has been awarded.
**/
var SustainabilityCertifications = /** @class */ (function (_super) {
    __extends(SustainabilityCertifications, _super);
    function SustainabilityCertifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breeamCertification" }),
        __metadata("design:type", String)
    ], SustainabilityCertifications.prototype, "breeamCertification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breeamCertificationException" }),
        __metadata("design:type", String)
    ], SustainabilityCertifications.prototype, "breeamCertificationException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecoCertifications", elemType: EcoCertification }),
        __metadata("design:type", Array)
    ], SustainabilityCertifications.prototype, "ecoCertifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leedCertification" }),
        __metadata("design:type", String)
    ], SustainabilityCertifications.prototype, "leedCertification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leedCertificationException" }),
        __metadata("design:type", String)
    ], SustainabilityCertifications.prototype, "leedCertificationException", void 0);
    return SustainabilityCertifications;
}(SpeakeasyBase));
export { SustainabilityCertifications };
