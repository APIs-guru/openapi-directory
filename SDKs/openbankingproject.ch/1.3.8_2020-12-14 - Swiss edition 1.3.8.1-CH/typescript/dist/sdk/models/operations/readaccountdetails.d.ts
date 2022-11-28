import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadAccountDetailsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ReadAccountDetailsQueryParams extends SpeakeasyBase {
    withBalance?: boolean;
}
export declare class ReadAccountDetailsHeaders extends SpeakeasyBase {
    consentId: string;
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
export declare class ReadAccountDetailsSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class ReadAccountDetails200ApplicationJson extends SpeakeasyBase {
    account: shared.AccountDetails;
}
export declare class ReadAccountDetailsRequest extends SpeakeasyBase {
    pathParams: ReadAccountDetailsPathParams;
    queryParams: ReadAccountDetailsQueryParams;
    headers: ReadAccountDetailsHeaders;
    security: ReadAccountDetailsSecurity;
}
export declare class ReadAccountDetailsResponse extends SpeakeasyBase {
    contentType: string;
    error400Ais?: shared.Error400Ais;
    error400NgAis?: shared.Error400NgAis;
    error401Ais?: shared.Error401Ais;
    error401NgAis?: shared.Error401NgAis;
    error403Ais?: shared.Error403Ais;
    error403NgAis?: shared.Error403NgAis;
    error404Ais?: shared.Error404Ais;
    error404NgAis?: shared.Error404NgAis;
    error405Ais?: shared.Error405Ais;
    error405NgAis?: shared.Error405NgAis;
    error406Ais?: shared.Error406Ais;
    error406NgAis?: shared.Error406NgAis;
    error409Ais?: shared.Error409Ais;
    error409NgAis?: shared.Error409NgAis;
    error429Ais?: shared.Error429Ais;
    error429NgAis?: shared.Error429NgAis;
    headers: Map<string, string[]>;
    statusCode: number;
    readAccountDetails200ApplicationJsonObject?: ReadAccountDetails200ApplicationJson;
}
