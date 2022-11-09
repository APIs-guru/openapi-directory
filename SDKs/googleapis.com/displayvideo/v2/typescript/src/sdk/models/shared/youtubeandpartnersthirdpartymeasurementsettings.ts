import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";


// YoutubeAndPartnersThirdPartyMeasurementSettings
/** 
 * Settings that control what third-party vendors are measuring specific line item metrics.
**/
export class YoutubeAndPartnersThirdPartyMeasurementSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandLiftVendorConfigs", elemType: shared.ThirdPartyVendorConfig })
  brandLiftVendorConfigs?: ThirdPartyVendorConfig[];

  @Metadata({ data: "json, name=brandSafetyVendorConfigs", elemType: shared.ThirdPartyVendorConfig })
  brandSafetyVendorConfigs?: ThirdPartyVendorConfig[];

  @Metadata({ data: "json, name=reachVendorConfigs", elemType: shared.ThirdPartyVendorConfig })
  reachVendorConfigs?: ThirdPartyVendorConfig[];

  @Metadata({ data: "json, name=viewabilityVendorConfigs", elemType: shared.ThirdPartyVendorConfig })
  viewabilityVendorConfigs?: ThirdPartyVendorConfig[];
}
