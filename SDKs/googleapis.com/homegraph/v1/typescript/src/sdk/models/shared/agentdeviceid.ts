import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgentDeviceId
/** 
 * Third-party device ID for one device.
**/
export class AgentDeviceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
