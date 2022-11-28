import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdlooxExcludedAdlooxCategoriesEnum {
    AdlooxUnspecified = "ADLOOX_UNSPECIFIED",
    AdultContentHard = "ADULT_CONTENT_HARD",
    AdultContentSoft = "ADULT_CONTENT_SOFT",
    IllegalContent = "ILLEGAL_CONTENT",
    BorderlineContent = "BORDERLINE_CONTENT",
    DiscriminatoryContent = "DISCRIMINATORY_CONTENT",
    ViolentContentWeapons = "VIOLENT_CONTENT_WEAPONS",
    LowViewabilityDomains = "LOW_VIEWABILITY_DOMAINS",
    Fraud = "FRAUD"
}
/**
 * Details of Adloox settings.
**/
export declare class Adloox extends SpeakeasyBase {
    excludedAdlooxCategories?: AdlooxExcludedAdlooxCategoriesEnum[];
}
