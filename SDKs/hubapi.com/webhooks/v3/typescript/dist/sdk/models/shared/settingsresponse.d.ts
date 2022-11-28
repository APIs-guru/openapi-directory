import { SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";
/**
 * Webhook settings for an app.
**/
export declare class SettingsResponse extends SpeakeasyBase {
    createdAt: Date;
    targetUrl: string;
    throttling: ThrottlingSettings;
    updatedAt?: Date;
}
