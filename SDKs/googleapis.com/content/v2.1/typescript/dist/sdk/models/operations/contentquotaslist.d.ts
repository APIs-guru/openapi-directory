import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentQuotasListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentQuotasListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentQuotasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentQuotasListRequest extends SpeakeasyBase {
    pathParams: ContentQuotasListPathParams;
    queryParams: ContentQuotasListQueryParams;
    security: ContentQuotasListSecurity;
}
export declare class ContentQuotasListResponse extends SpeakeasyBase {
    contentType: string;
    listMethodQuotasResponse?: shared.ListMethodQuotasResponse;
    statusCode: number;
}
