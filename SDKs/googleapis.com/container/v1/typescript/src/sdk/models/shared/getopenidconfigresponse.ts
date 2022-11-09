import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";


// GetOpenIdConfigResponse
/** 
 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
**/
export class GetOpenIdConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheHeader" })
  cacheHeader?: HttpCacheControlResponseHeader;

  @Metadata({ data: "json, name=claims_supported" })
  claimsSupported?: string[];

  @Metadata({ data: "json, name=grant_types" })
  grantTypes?: string[];

  @Metadata({ data: "json, name=id_token_signing_alg_values_supported" })
  idTokenSigningAlgValuesSupported?: string[];

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;

  @Metadata({ data: "json, name=response_types_supported" })
  responseTypesSupported?: string[];

  @Metadata({ data: "json, name=subject_types_supported" })
  subjectTypesSupported?: string[];
}
