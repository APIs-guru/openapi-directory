import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EcoCertificationAwardedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum EcoCertificationEcoCertificateEnum {
    EcoCertificateUnspecified = "ECO_CERTIFICATE_UNSPECIFIED",
    Iso14001 = "ISO14001",
    Iso50001 = "ISO50001",
    AsianEcotourism = "ASIAN_ECOTOURISM",
    BiosphereResposnibleTourism = "BIOSPHERE_RESPOSNIBLE_TOURISM",
    BureauVeritas = "BUREAU_VERITAS",
    ControlUnion = "CONTROL_UNION",
    Earthcheck = "EARTHCHECK",
    EcoCertificationMalta = "ECO_CERTIFICATION_MALTA",
    EcotourismAustraliasEco = "ECOTOURISM_AUSTRALIAS_ECO",
    GreatGreenDeal = "GREAT_GREEN_DEAL",
    GreenGlobe = "GREEN_GLOBE",
    GreenGrowth2050 = "GREEN_GROWTH2050",
    GreenKey = "GREEN_KEY",
    GreenKeyEcoRating = "GREEN_KEY_ECO_RATING",
    GreenSeal = "GREEN_SEAL",
    GreenStar = "GREEN_STAR",
    GreenTourismActive = "GREEN_TOURISM_ACTIVE",
    HiltonLightstay = "HILTON_LIGHTSTAY",
    HostellingInternationalsQualityAndSustainability = "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY",
    HotelesMasVerdes = "HOTELES_MAS_VERDES",
    NordicSwanEcolabel = "NORDIC_SWAN_ECOLABEL",
    PreferredByNatureSustainableTourism = "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM",
    SustainableTravelIreland = "SUSTAINABLE_TRAVEL_IRELAND",
    TofTigersInititivesPug = "TOF_TIGERS_INITITIVES_PUG",
    Travelife = "TRAVELIFE",
    UnitedCertificationSystemsLimited = "UNITED_CERTIFICATION_SYSTEMS_LIMITED",
    VireoSrl = "VIREO_SRL"
}
/**
 * An eco certificate awarded to the hotel.
**/
export declare class EcoCertification extends SpeakeasyBase {
    awarded?: boolean;
    awardedException?: EcoCertificationAwardedExceptionEnum;
    ecoCertificate?: EcoCertificationEcoCertificateEnum;
}
