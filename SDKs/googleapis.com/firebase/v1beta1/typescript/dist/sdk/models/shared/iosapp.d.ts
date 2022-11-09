import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum IosAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * Details of a Firebase App for iOS.
**/
export declare class IosApp extends SpeakeasyBase {
    apiKeyId?: string;
    appId?: string;
    appStoreId?: string;
    bundleId?: string;
    displayName?: string;
    name?: string;
    projectId?: string;
    state?: IosAppStateEnum;
    teamId?: string;
}
