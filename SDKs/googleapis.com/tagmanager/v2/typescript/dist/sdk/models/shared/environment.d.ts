import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnvironmentTypeEnum {
    User = "user",
    Live = "live",
    Latest = "latest",
    Workspace = "workspace"
}
/**
 * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
**/
export declare class Environment extends SpeakeasyBase {
    accountId?: string;
    authorizationCode?: string;
    authorizationTimestamp?: string;
    containerId?: string;
    containerVersionId?: string;
    description?: string;
    enableDebug?: boolean;
    environmentId?: string;
    fingerprint?: string;
    name?: string;
    path?: string;
    tagManagerUrl?: string;
    type?: EnvironmentTypeEnum;
    url?: string;
    workspaceId?: string;
}
