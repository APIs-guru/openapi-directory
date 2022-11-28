import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetTransactionListQueryParams extends SpeakeasyBase {
    bookingStatus: shared.BookingStatusEnum;
    dateFrom?: Date;
    dateTo?: Date;
    deltaList?: boolean;
    entryReferenceFrom?: string;
    withBalance?: boolean;
}
export declare class GetTransactionListHeaders extends SpeakeasyBase {
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
export declare class GetTransactionListSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetTransactionListRequest extends SpeakeasyBase {
    pathParams: GetTransactionListPathParams;
    queryParams: GetTransactionListQueryParams;
    headers: GetTransactionListHeaders;
    security: GetTransactionListSecurity;
}
export declare class GetTransactionListResponse extends SpeakeasyBase {
    body?: Uint8Array;
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
    transactionsResponse200Json?: shared.TransactionsResponse200Json;
}
