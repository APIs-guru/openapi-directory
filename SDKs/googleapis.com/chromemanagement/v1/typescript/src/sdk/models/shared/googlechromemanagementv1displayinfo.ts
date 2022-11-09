import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1DisplayInfo
/** 
 * Information for a display.
**/
export class GoogleChromeManagementV1DisplayInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=isInternal" })
  isInternal?: boolean;

  @Metadata({ data: "json, name=refreshRate" })
  refreshRate?: number;

  @Metadata({ data: "json, name=resolutionHeight" })
  resolutionHeight?: number;

  @Metadata({ data: "json, name=resolutionWidth" })
  resolutionWidth?: number;
}
