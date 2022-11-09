import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkloadIdentityConfig
/** 
 * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
**/
export class WorkloadIdentityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=workloadPool" })
  workloadPool?: string;
}
