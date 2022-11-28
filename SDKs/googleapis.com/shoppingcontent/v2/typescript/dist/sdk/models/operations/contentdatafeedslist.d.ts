import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentDatafeedsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentDatafeedsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsListRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsListPathParams;
    queryParams: ContentDatafeedsListQueryParams;
    security: ContentDatafeedsListSecurity;
}
export declare class ContentDatafeedsListResponse extends SpeakeasyBase {
    contentType: string;
    datafeedsListResponse?: shared.DatafeedsListResponse;
    statusCode: number;
}
