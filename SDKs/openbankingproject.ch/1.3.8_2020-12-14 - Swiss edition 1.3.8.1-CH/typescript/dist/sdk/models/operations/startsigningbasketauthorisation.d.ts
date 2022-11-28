import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartSigningBasketAuthorisationPathParams extends SpeakeasyBase {
    basketId: string;
}
export declare class StartSigningBasketAuthorisationHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuCorporateId?: string;
    psuCorporateIdType?: string;
    psuDeviceId?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuId?: string;
    psuIdType?: string;
    psuIpAddress?: string;
    psuIpPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppNokRedirectUri?: string;
    tppNotificationContentPreferred?: string;
    tppNotificationUri?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectUri?: string;
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class StartSigningBasketAuthorisationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class StartSigningBasketAuthorisationRequest extends SpeakeasyBase {
    pathParams: StartSigningBasketAuthorisationPathParams;
    headers: StartSigningBasketAuthorisationHeaders;
    request?: any;
    security: StartSigningBasketAuthorisationSecurity;
}
export declare class StartSigningBasketAuthorisationResponse extends SpeakeasyBase {
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
    startScaprocessResponse?: shared.StartScaprocessResponse;
}
