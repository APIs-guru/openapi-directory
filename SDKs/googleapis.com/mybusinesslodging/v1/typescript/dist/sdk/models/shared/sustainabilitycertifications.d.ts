import { SpeakeasyBase } from "../../../internal/utils";
import { EcoCertification } from "./ecocertification";
export declare enum SustainabilityCertificationsBreeamCertificationEnum {
    BreeamCertificationUnspecified = "BREEAM_CERTIFICATION_UNSPECIFIED",
    NoBreeamCertification = "NO_BREEAM_CERTIFICATION",
    BreeamPass = "BREEAM_PASS",
    BreeamGood = "BREEAM_GOOD",
    BreeamVeryGood = "BREEAM_VERY_GOOD",
    BreeamExcellent = "BREEAM_EXCELLENT",
    BreeamOutstanding = "BREEAM_OUTSTANDING"
}
export declare enum SustainabilityCertificationsBreeamCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum SustainabilityCertificationsLeedCertificationEnum {
    LeedCertificationUnspecified = "LEED_CERTIFICATION_UNSPECIFIED",
    NoLeedCertification = "NO_LEED_CERTIFICATION",
    LeedCertified = "LEED_CERTIFIED",
    LeedSilver = "LEED_SILVER",
    LeedGold = "LEED_GOLD",
    LeedPlatinum = "LEED_PLATINUM"
}
export declare enum SustainabilityCertificationsLeedCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sustainability certifications the hotel has been awarded.
**/
export declare class SustainabilityCertifications extends SpeakeasyBase {
    breeamCertification?: SustainabilityCertificationsBreeamCertificationEnum;
    breeamCertificationException?: SustainabilityCertificationsBreeamCertificationExceptionEnum;
    ecoCertifications?: EcoCertification[];
    leedCertification?: SustainabilityCertificationsLeedCertificationEnum;
    leedCertificationException?: SustainabilityCertificationsLeedCertificationExceptionEnum;
}
