import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}
/**
 * The specification for query spell correction.
**/
export declare class GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
}
