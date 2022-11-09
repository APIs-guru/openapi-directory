import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    SuggestionOnly = "SUGGESTION_ONLY"
,    Auto = "AUTO"
}


// GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
}
