import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED"
,    NonPrivileged = "NON_PRIVILEGED"
,    Privileged = "PRIVILEGED"
}


// MembershipSpec
/** 
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export class MembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityPolicy" })
  securityPolicy?: MembershipSpecSecurityPolicyEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
