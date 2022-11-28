import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";



// GetOpenIdConfigResponse
/** 
 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
**/
export class GetOpenIdConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheHeader" })
  cacheHeader?: HttpCacheControlResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=claims_supported" })
  claimsSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=grant_types" })
  grantTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=id_token_signing_alg_values_supported" })
  idTokenSigningAlgValuesSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;

  @SpeakeasyMetadata({ data: "json, name=response_types_supported" })
  responseTypesSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=subject_types_supported" })
  subjectTypesSupported?: string[];
}
