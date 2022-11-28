import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
export declare class Authority extends SpeakeasyBase {
    identityProvider?: string;
    issuer?: string;
    oidcJwks?: string;
    workloadIdentityPool?: string;
}
/**
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
export declare class AuthorityInput extends SpeakeasyBase {
    issuer?: string;
    oidcJwks?: string;
}
