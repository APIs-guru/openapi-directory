import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED",
    NonPrivileged = "NON_PRIVILEGED",
    Privileged = "PRIVILEGED"
}
/**
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export declare class MembershipSpec extends SpeakeasyBase {
    securityPolicy?: MembershipSpecSecurityPolicyEnum;
    version?: string;
}
