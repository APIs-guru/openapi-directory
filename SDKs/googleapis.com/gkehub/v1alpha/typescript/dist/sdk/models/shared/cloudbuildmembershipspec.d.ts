import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CloudBuildMembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED",
    NonPrivileged = "NON_PRIVILEGED",
    Privileged = "PRIVILEGED"
}
/**
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export declare class CloudBuildMembershipSpec extends SpeakeasyBase {
    securityPolicy?: CloudBuildMembershipSpecSecurityPolicyEnum;
    version?: string;
}
