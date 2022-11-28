import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}


// GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum;
}
