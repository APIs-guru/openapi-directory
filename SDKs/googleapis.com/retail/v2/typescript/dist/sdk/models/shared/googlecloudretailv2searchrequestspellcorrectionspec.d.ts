import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}
/**
 * The specification for query spell correction.
**/
export declare class GoogleCloudRetailV2SearchRequestSpellCorrectionSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnum;
}
