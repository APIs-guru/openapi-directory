import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSigningBasketAuthorisationPathParams extends SpeakeasyBase {
    basketId: string;
}
export declare class GetSigningBasketAuthorisationHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuDeviceId?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuIpAddress?: string;
    psuIpPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class GetSigningBasketAuthorisationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetSigningBasketAuthorisationRequest extends SpeakeasyBase {
    pathParams: GetSigningBasketAuthorisationPathParams;
    headers: GetSigningBasketAuthorisationHeaders;
    security: GetSigningBasketAuthorisationSecurity;
}
export declare class GetSigningBasketAuthorisationResponse extends SpeakeasyBase {
    contentType: string;
    error400NgSbs?: shared.Error400NgSbs;
    error400Sbs?: shared.Error400Sbs;
    error401NgSbs?: shared.Error401NgSbs;
    error401Sbs?: shared.Error401Sbs;
    error403NgSbs?: shared.Error403NgSbs;
    error403Sbs?: shared.Error403Sbs;
    error404NgSbs?: shared.Error404NgSbs;
    error404Sbs?: shared.Error404Sbs;
    error405NgSbs?: shared.Error405NgSbs;
    error405Sbs?: shared.Error405Sbs;
    error409NgSbs?: shared.Error409NgSbs;
    error409Sbs?: shared.Error409Sbs;
    headers: Map<string, string[]>;
    statusCode: number;
    authorisations?: shared.Authorisations;
}
