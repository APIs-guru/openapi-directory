import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CmHybridConfig } from "./cmhybridconfig";
import { ThirdPartyOnlyConfig } from "./thirdpartyonlyconfig";


// AdvertiserAdServerConfig
/** 
 * Ad server related settings of an advertiser.
**/
export class AdvertiserAdServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmHybridConfig" })
  cmHybridConfig?: CmHybridConfig;

  @Metadata({ data: "json, name=thirdPartyOnlyConfig" })
  thirdPartyOnlyConfig?: ThirdPartyOnlyConfig;
}
