import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceInfo
/** 
 * Signals associated with the device making the request.
**/
export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceModelName" })
  deviceModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCodeFromWebview" })
  languageCodeFromWebview?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCodeRaw" })
  languageCodeRaw?: string;

  @SpeakeasyMetadata({ data: "json, name=screenResolutionHeight" })
  screenResolutionHeight?: string;

  @SpeakeasyMetadata({ data: "json, name=screenResolutionWidth" })
  screenResolutionWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
