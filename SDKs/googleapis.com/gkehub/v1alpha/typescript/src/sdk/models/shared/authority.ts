import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Authority
/** 
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
export class Authority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityProvider" })
  identityProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=oidcJwks" })
  oidcJwks?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityPool" })
  workloadIdentityPool?: string;
}


// AuthorityInput
/** 
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
export class AuthorityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=oidcJwks" })
  oidcJwks?: string;
}
