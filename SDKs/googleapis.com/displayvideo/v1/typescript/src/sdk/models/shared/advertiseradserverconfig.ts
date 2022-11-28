import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CmHybridConfig } from "./cmhybridconfig";
import { ThirdPartyOnlyConfig } from "./thirdpartyonlyconfig";



// AdvertiserAdServerConfig
/** 
 * Ad server related settings of an advertiser.
**/
export class AdvertiserAdServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmHybridConfig" })
  cmHybridConfig?: CmHybridConfig;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyOnlyConfig" })
  thirdPartyOnlyConfig?: ThirdPartyOnlyConfig;
}
