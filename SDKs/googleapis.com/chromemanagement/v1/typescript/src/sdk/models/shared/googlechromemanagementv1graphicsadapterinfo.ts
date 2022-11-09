import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1GraphicsAdapterInfo
/** 
 * Information of a graphics adapter (GPU).
**/
export class GoogleChromeManagementV1GraphicsAdapterInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=adapter" })
  adapter?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=driverVersion" })
  driverVersion?: string;
}
