import { SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
/**
 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
**/
export declare class GetOpenIdConfigResponse extends SpeakeasyBase {
    cacheHeader?: HttpCacheControlResponseHeader;
    claimsSupported?: string[];
    grantTypes?: string[];
    idTokenSigningAlgValuesSupported?: string[];
    issuer?: string;
    jwksUri?: string;
    responseTypesSupported?: string[];
    subjectTypesSupported?: string[];
}
