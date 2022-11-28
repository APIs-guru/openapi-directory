import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1DisplayInfo
/** 
 * Information for a display.
**/
export class GoogleChromeManagementV1DisplayInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=isInternal" })
  isInternal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refreshRate" })
  refreshRate?: number;

  @SpeakeasyMetadata({ data: "json, name=resolutionHeight" })
  resolutionHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=resolutionWidth" })
  resolutionWidth?: number;
}
