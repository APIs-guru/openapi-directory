import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
**/
export declare class WorkloadIdentityConfig extends SpeakeasyBase {
    identityNamespace?: string;
    identityProvider?: string;
    workloadPool?: string;
}
