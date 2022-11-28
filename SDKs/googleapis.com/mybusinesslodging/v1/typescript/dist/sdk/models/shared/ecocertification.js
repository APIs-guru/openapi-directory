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
export var EcoCertificationAwardedExceptionEnum;
(function (EcoCertificationAwardedExceptionEnum) {
    EcoCertificationAwardedExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    EcoCertificationAwardedExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    EcoCertificationAwardedExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    EcoCertificationAwardedExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(EcoCertificationAwardedExceptionEnum || (EcoCertificationAwardedExceptionEnum = {}));
export var EcoCertificationEcoCertificateEnum;
(function (EcoCertificationEcoCertificateEnum) {
    EcoCertificationEcoCertificateEnum["EcoCertificateUnspecified"] = "ECO_CERTIFICATE_UNSPECIFIED";
    EcoCertificationEcoCertificateEnum["Iso14001"] = "ISO14001";
    EcoCertificationEcoCertificateEnum["Iso50001"] = "ISO50001";
    EcoCertificationEcoCertificateEnum["AsianEcotourism"] = "ASIAN_ECOTOURISM";
    EcoCertificationEcoCertificateEnum["BiosphereResposnibleTourism"] = "BIOSPHERE_RESPOSNIBLE_TOURISM";
    EcoCertificationEcoCertificateEnum["BureauVeritas"] = "BUREAU_VERITAS";
    EcoCertificationEcoCertificateEnum["ControlUnion"] = "CONTROL_UNION";
    EcoCertificationEcoCertificateEnum["Earthcheck"] = "EARTHCHECK";
    EcoCertificationEcoCertificateEnum["EcoCertificationMalta"] = "ECO_CERTIFICATION_MALTA";
    EcoCertificationEcoCertificateEnum["EcotourismAustraliasEco"] = "ECOTOURISM_AUSTRALIAS_ECO";
    EcoCertificationEcoCertificateEnum["GreatGreenDeal"] = "GREAT_GREEN_DEAL";
    EcoCertificationEcoCertificateEnum["GreenGlobe"] = "GREEN_GLOBE";
    EcoCertificationEcoCertificateEnum["GreenGrowth2050"] = "GREEN_GROWTH2050";
    EcoCertificationEcoCertificateEnum["GreenKey"] = "GREEN_KEY";
    EcoCertificationEcoCertificateEnum["GreenKeyEcoRating"] = "GREEN_KEY_ECO_RATING";
    EcoCertificationEcoCertificateEnum["GreenSeal"] = "GREEN_SEAL";
    EcoCertificationEcoCertificateEnum["GreenStar"] = "GREEN_STAR";
    EcoCertificationEcoCertificateEnum["GreenTourismActive"] = "GREEN_TOURISM_ACTIVE";
    EcoCertificationEcoCertificateEnum["HiltonLightstay"] = "HILTON_LIGHTSTAY";
    EcoCertificationEcoCertificateEnum["HostellingInternationalsQualityAndSustainability"] = "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY";
    EcoCertificationEcoCertificateEnum["HotelesMasVerdes"] = "HOTELES_MAS_VERDES";
    EcoCertificationEcoCertificateEnum["NordicSwanEcolabel"] = "NORDIC_SWAN_ECOLABEL";
    EcoCertificationEcoCertificateEnum["PreferredByNatureSustainableTourism"] = "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM";
    EcoCertificationEcoCertificateEnum["SustainableTravelIreland"] = "SUSTAINABLE_TRAVEL_IRELAND";
    EcoCertificationEcoCertificateEnum["TofTigersInititivesPug"] = "TOF_TIGERS_INITITIVES_PUG";
    EcoCertificationEcoCertificateEnum["Travelife"] = "TRAVELIFE";
    EcoCertificationEcoCertificateEnum["UnitedCertificationSystemsLimited"] = "UNITED_CERTIFICATION_SYSTEMS_LIMITED";
    EcoCertificationEcoCertificateEnum["VireoSrl"] = "VIREO_SRL";
})(EcoCertificationEcoCertificateEnum || (EcoCertificationEcoCertificateEnum = {}));
// EcoCertification
/**
 * An eco certificate awarded to the hotel.
**/
var EcoCertification = /** @class */ (function (_super) {
    __extends(EcoCertification, _super);
    function EcoCertification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awarded" }),
        __metadata("design:type", Boolean)
    ], EcoCertification.prototype, "awarded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awardedException" }),
        __metadata("design:type", String)
    ], EcoCertification.prototype, "awardedException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecoCertificate" }),
        __metadata("design:type", String)
    ], EcoCertification.prototype, "ecoCertificate", void 0);
    return EcoCertification;
}(SpeakeasyBase));
export { EcoCertification };
