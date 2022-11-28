import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkloadIdentityConfig
/** 
 * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
**/
export class WorkloadIdentityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityNamespace" })
  identityNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProvider" })
  identityProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadPool" })
  workloadPool?: string;
}
