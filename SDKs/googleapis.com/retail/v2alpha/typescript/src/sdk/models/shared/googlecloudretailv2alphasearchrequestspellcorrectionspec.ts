import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    SuggestionOnly = "SUGGESTION_ONLY"
,    Auto = "AUTO"
}


// GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec
/** 
 * The specification for query spell correction.
**/
export class GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum;
}
