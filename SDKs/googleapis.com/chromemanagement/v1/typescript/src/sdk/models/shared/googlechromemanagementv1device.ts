import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1Device
/** 
 * Describes a device reporting Chrome browser information.
**/
export class GoogleChromeManagementV1Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=machine" })
  machine?: string;
}
