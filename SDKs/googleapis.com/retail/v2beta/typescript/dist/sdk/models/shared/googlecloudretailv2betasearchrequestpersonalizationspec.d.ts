import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}
/**
 * The specification for personalization.
**/
export declare class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
}
