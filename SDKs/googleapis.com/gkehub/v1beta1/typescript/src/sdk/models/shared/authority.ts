import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Authority
/** 
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
export class Authority extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityProvider" })
  identityProvider?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=oidcJwks" })
  oidcJwks?: string;

  @Metadata({ data: "json, name=workloadIdentityPool" })
  workloadIdentityPool?: string;
}
