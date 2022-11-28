import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSigningBasketPsuDataPathParams extends SpeakeasyBase {
    authorisationId: string;
    basketId: string;
}
export declare class UpdateSigningBasketPsuDataHeaders extends SpeakeasyBase {
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
    tppSignatureCertificate?: string;
    xRequestId: string;
}
export declare class UpdateSigningBasketPsuDataSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class UpdateSigningBasketPsuDataRequest extends SpeakeasyBase {
    pathParams: UpdateSigningBasketPsuDataPathParams;
    headers: UpdateSigningBasketPsuDataHeaders;
    request?: any;
    security: UpdateSigningBasketPsuDataSecurity;
}
export declare class UpdateSigningBasketPsuDataResponse extends SpeakeasyBase {
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
    updateSigningBasketPsuData200ApplicationJsonOneOf?: any;
}
