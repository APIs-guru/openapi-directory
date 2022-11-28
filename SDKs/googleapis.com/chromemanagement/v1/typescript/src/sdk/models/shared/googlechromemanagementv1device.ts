import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1Device
/** 
 * Describes a device reporting Chrome browser information.
**/
export class GoogleChromeManagementV1Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=machine" })
  machine?: string;
}
