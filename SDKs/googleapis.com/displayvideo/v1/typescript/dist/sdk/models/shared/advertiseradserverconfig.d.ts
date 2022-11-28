import { SpeakeasyBase } from "../../../internal/utils";
import { CmHybridConfig } from "./cmhybridconfig";
import { ThirdPartyOnlyConfig } from "./thirdpartyonlyconfig";
/**
 * Ad server related settings of an advertiser.
**/
export declare class AdvertiserAdServerConfig extends SpeakeasyBase {
    cmHybridConfig?: CmHybridConfig;
    thirdPartyOnlyConfig?: ThirdPartyOnlyConfig;
}
