import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThrottlingSettings } from "./throttlingsettings";


// SettingsResponse
/** 
 * Webhook settings for an app.
**/
export class SettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl: string;

  @Metadata({ data: "json, name=throttling" })
  throttling: ThrottlingSettings;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
