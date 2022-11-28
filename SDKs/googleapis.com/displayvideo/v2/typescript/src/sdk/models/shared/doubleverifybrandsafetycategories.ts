import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum {
    HigherSeverityUnspecified = "HIGHER_SEVERITY_UNSPECIFIED",
    AdultContentPornography = "ADULT_CONTENT_PORNOGRAPHY",
    CopyrightInfringement = "COPYRIGHT_INFRINGEMENT",
    SubstanceAbuse = "SUBSTANCE_ABUSE",
    GraphicViolenceWeapons = "GRAPHIC_VIOLENCE_WEAPONS",
    HateProfanity = "HATE_PROFANITY",
    CriminalSkills = "CRIMINAL_SKILLS",
    NuisanceIncentivizedMalwareClutter = "NUISANCE_INCENTIVIZED_MALWARE_CLUTTER"
}

export enum DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum {
    MediumSeverityUnspecified = "MEDIUM_SEVERITY_UNSPECIFIED",
    AdServers = "AD_SERVERS",
    AdultContentSwimsuit = "ADULT_CONTENT_SWIMSUIT",
    AlternativeLifestyles = "ALTERNATIVE_LIFESTYLES",
    CelebrityGossip = "CELEBRITY_GOSSIP",
    Gambling = "GAMBLING",
    Occult = "OCCULT",
    SexEducation = "SEX_EDUCATION",
    DisasterAviation = "DISASTER_AVIATION",
    DisasterManMade = "DISASTER_MAN_MADE",
    DisasterNatural = "DISASTER_NATURAL",
    DisasterTerroristEvents = "DISASTER_TERRORIST_EVENTS",
    DisasterVehicle = "DISASTER_VEHICLE",
    Alcohol = "ALCOHOL",
    Smoking = "SMOKING",
    NegativeNewsFinancial = "NEGATIVE_NEWS_FINANCIAL",
    NonEnglish = "NON_ENGLISH",
    ParkingPage = "PARKING_PAGE",
    UnmoderatedUgc = "UNMODERATED_UGC",
    InflammatoryPoliticsAndNews = "INFLAMMATORY_POLITICS_AND_NEWS",
    NegativeNewsPharmaceutical = "NEGATIVE_NEWS_PHARMACEUTICAL"
}


// DoubleVerifyBrandSafetyCategories
/** 
 * Settings for brand safety controls.
**/
export class DoubleVerifyBrandSafetyCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avoidUnknownBrandSafetyCategory" })
  avoidUnknownBrandSafetyCategory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avoidedHighSeverityCategories" })
  avoidedHighSeverityCategories?: DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[];

  @SpeakeasyMetadata({ data: "json, name=avoidedMediumSeverityCategories" })
  avoidedMediumSeverityCategories?: DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[];
}
