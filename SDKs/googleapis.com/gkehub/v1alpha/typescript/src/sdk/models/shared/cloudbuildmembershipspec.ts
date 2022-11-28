import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CloudBuildMembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED",
    NonPrivileged = "NON_PRIVILEGED",
    Privileged = "PRIVILEGED"
}


// CloudBuildMembershipSpec
/** 
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
**/
export class CloudBuildMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityPolicy" })
  securityPolicy?: CloudBuildMembershipSpecSecurityPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
