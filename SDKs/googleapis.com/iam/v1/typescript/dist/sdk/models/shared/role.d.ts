import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RoleStageEnum {
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    Disabled = "DISABLED",
    Eap = "EAP"
}
/**
 * A role in the Identity and Access Management API.
**/
export declare class Role extends SpeakeasyBase {
    deleted?: boolean;
    description?: string;
    etag?: string;
    includedPermissions?: string[];
    name?: string;
    stage?: RoleStageEnum;
    title?: string;
}
