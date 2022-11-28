import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EcoCertification } from "./ecocertification";


export enum SustainabilityCertificationsBreeamCertificationEnum {
    BreeamCertificationUnspecified = "BREEAM_CERTIFICATION_UNSPECIFIED",
    NoBreeamCertification = "NO_BREEAM_CERTIFICATION",
    BreeamPass = "BREEAM_PASS",
    BreeamGood = "BREEAM_GOOD",
    BreeamVeryGood = "BREEAM_VERY_GOOD",
    BreeamExcellent = "BREEAM_EXCELLENT",
    BreeamOutstanding = "BREEAM_OUTSTANDING"
}

export enum SustainabilityCertificationsBreeamCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum SustainabilityCertificationsLeedCertificationEnum {
    LeedCertificationUnspecified = "LEED_CERTIFICATION_UNSPECIFIED",
    NoLeedCertification = "NO_LEED_CERTIFICATION",
    LeedCertified = "LEED_CERTIFIED",
    LeedSilver = "LEED_SILVER",
    LeedGold = "LEED_GOLD",
    LeedPlatinum = "LEED_PLATINUM"
}

export enum SustainabilityCertificationsLeedCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// SustainabilityCertifications
/** 
 * Sustainability certifications the hotel has been awarded.
**/
export class SustainabilityCertifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breeamCertification" })
  breeamCertification?: SustainabilityCertificationsBreeamCertificationEnum;

  @SpeakeasyMetadata({ data: "json, name=breeamCertificationException" })
  breeamCertificationException?: SustainabilityCertificationsBreeamCertificationExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ecoCertifications", elemType: EcoCertification })
  ecoCertifications?: EcoCertification[];

  @SpeakeasyMetadata({ data: "json, name=leedCertification" })
  leedCertification?: SustainabilityCertificationsLeedCertificationEnum;

  @SpeakeasyMetadata({ data: "json, name=leedCertificationException" })
  leedCertificationException?: SustainabilityCertificationsLeedCertificationExceptionEnum;
}
