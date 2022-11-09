import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    SuggestionOnly = "SUGGESTION_ONLY"
,    Auto = "AUTO"
}


// GoogleCloudRetailV2SearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2SearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum;
}
