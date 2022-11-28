import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";
/**
 * Settings that control what third-party vendors are measuring specific line item metrics.
**/
export declare class YoutubeAndPartnersThirdPartyMeasurementSettings extends SpeakeasyBase {
    brandLiftVendorConfigs?: ThirdPartyVendorConfig[];
    brandSafetyVendorConfigs?: ThirdPartyVendorConfig[];
    reachVendorConfigs?: ThirdPartyVendorConfig[];
    viewabilityVendorConfigs?: ThirdPartyVendorConfig[];
}
