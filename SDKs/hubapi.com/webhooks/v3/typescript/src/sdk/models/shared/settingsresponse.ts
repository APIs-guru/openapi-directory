import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";



// SettingsResponse
/** 
 * Webhook settings for an app.
**/
export class SettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl: string;

  @SpeakeasyMetadata({ data: "json, name=throttling" })
  throttling: ThrottlingSettings;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
