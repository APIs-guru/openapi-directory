import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceInfo
/** 
 * Device information.
**/
export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hwVersion" })
  hwVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=swVersion" })
  swVersion?: string;
}
