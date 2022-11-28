import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCollectionsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentCollectionsListQueryParams extends SpeakeasyBase {
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
export declare class ContentCollectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCollectionsListRequest extends SpeakeasyBase {
    pathParams: ContentCollectionsListPathParams;
    queryParams: ContentCollectionsListQueryParams;
    security: ContentCollectionsListSecurity;
}
export declare class ContentCollectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listCollectionsResponse?: shared.ListCollectionsResponse;
    statusCode: number;
}
