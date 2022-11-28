import { SpeakeasyBase } from "../../../internal/utils";
import { ThrottlingSettings } from "./throttlingsettings";
/**
 * New or updated webhook settings for an app.
**/
export declare class SettingsChangeRequest extends SpeakeasyBase {
    targetUrl: string;
    throttling: ThrottlingSettings;
}
