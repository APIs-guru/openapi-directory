import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CloudBuildMembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED"
,    NonPrivileged = "NON_PRIVILEGED"
,    Privileged = "PRIVILEGED"
}


// CloudBuildMembershipSpec
/** 
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export class CloudBuildMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityPolicy" })
  securityPolicy?: CloudBuildMembershipSpecSecurityPolicyEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
