import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}


// GoogleCloudRetailV2SearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2SearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum;
}
