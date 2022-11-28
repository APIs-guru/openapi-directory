import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The extent to which calendar access is granted by this ACL rule.
**/
export declare class AclRuleScope extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class AclRule extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    role?: string;
    scope?: AclRuleScope;
}
