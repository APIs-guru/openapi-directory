import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyVendorConfig } from "./thirdpartyvendorconfig";



// YoutubeAndPartnersThirdPartyMeasurementSettings
/** 
 * Settings that control what third-party vendors are measuring specific line item metrics.
**/
export class YoutubeAndPartnersThirdPartyMeasurementSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandLiftVendorConfigs", elemType: ThirdPartyVendorConfig })
  brandLiftVendorConfigs?: ThirdPartyVendorConfig[];

  @SpeakeasyMetadata({ data: "json, name=brandSafetyVendorConfigs", elemType: ThirdPartyVendorConfig })
  brandSafetyVendorConfigs?: ThirdPartyVendorConfig[];

  @SpeakeasyMetadata({ data: "json, name=reachVendorConfigs", elemType: ThirdPartyVendorConfig })
  reachVendorConfigs?: ThirdPartyVendorConfig[];

  @SpeakeasyMetadata({ data: "json, name=viewabilityVendorConfigs", elemType: ThirdPartyVendorConfig })
  viewabilityVendorConfigs?: ThirdPartyVendorConfig[];
}
