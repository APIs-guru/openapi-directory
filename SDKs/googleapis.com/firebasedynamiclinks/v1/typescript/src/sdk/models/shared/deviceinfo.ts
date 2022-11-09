import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceInfo
/** 
 * Signals associated with the device making the request.
**/
export class DeviceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceModelName" })
  deviceModelName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=languageCodeFromWebview" })
  languageCodeFromWebview?: string;

  @Metadata({ data: "json, name=languageCodeRaw" })
  languageCodeRaw?: string;

  @Metadata({ data: "json, name=screenResolutionHeight" })
  screenResolutionHeight?: string;

  @Metadata({ data: "json, name=screenResolutionWidth" })
  screenResolutionWidth?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
