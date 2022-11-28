import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * A list of third-party applications which the user has installed or given access to Google Drive.
**/
export declare class AppList extends SpeakeasyBase {
    defaultAppIds?: string[];
    etag?: string;
    items?: App[];
    kind?: string;
    selfLink?: string;
}
