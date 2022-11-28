import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}


// GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
}
