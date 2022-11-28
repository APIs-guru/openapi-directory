import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1GraphicsAdapterInfo
/** 
 * Information of a graphics adapter (GPU).
**/
export class GoogleChromeManagementV1GraphicsAdapterInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adapter" })
  adapter?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=driverVersion" })
  driverVersion?: string;
}
