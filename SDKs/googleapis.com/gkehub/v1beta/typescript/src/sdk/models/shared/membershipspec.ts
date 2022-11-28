import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED",
    NonPrivileged = "NON_PRIVILEGED",
    Privileged = "PRIVILEGED"
}


// MembershipSpec
/** 
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export class MembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityPolicy" })
  securityPolicy?: MembershipSpecSecurityPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
