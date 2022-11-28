import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}
/**
 * The specification for query spell correction.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum;
}
