import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
export declare enum AuthorizationPolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
**/
export declare class AuthorizationPolicy extends SpeakeasyBase {
    action?: AuthorizationPolicyActionEnum;
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    rules?: Rule[];
    updateTime?: string;
}
/**
 * AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
**/
export declare class AuthorizationPolicyInput extends SpeakeasyBase {
    action?: AuthorizationPolicyActionEnum;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    rules?: Rule[];
}
