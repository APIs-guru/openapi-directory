import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdlooxExcludedAdlooxCategoriesEnum {
    AdlooxUnspecified = "ADLOOX_UNSPECIFIED"
,    AdultContentHard = "ADULT_CONTENT_HARD"
,    AdultContentSoft = "ADULT_CONTENT_SOFT"
,    IllegalContent = "ILLEGAL_CONTENT"
,    BorderlineContent = "BORDERLINE_CONTENT"
,    DiscriminatoryContent = "DISCRIMINATORY_CONTENT"
,    ViolentContentWeapons = "VIOLENT_CONTENT_WEAPONS"
,    LowViewabilityDomains = "LOW_VIEWABILITY_DOMAINS"
,    Fraud = "FRAUD"
}


// Adloox
/** 
 * Details of Adloox settings.
**/
export class Adloox extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedAdlooxCategories" })
  excludedAdlooxCategories?: AdlooxExcludedAdlooxCategoriesEnum[];
}
