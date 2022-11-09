import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceInfo
/** 
 * Device information.
**/
export class DeviceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=hwVersion" })
  hwVersion?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=swVersion" })
  swVersion?: string;
}
