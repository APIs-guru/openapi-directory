import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WebAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * Details of a Firebase App for the web.
**/
export declare class WebApp extends SpeakeasyBase {
    apiKeyId?: string;
    appId?: string;
    appUrls?: string[];
    displayName?: string;
    name?: string;
    projectId?: string;
    state?: WebAppStateEnum;
    webId?: string;
}
