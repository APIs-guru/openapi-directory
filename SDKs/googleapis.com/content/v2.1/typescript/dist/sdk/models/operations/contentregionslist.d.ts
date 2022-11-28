import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentRegionsListQueryParams extends SpeakeasyBase {
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
export declare class ContentRegionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionsListRequest extends SpeakeasyBase {
    pathParams: ContentRegionsListPathParams;
    queryParams: ContentRegionsListQueryParams;
    security: ContentRegionsListSecurity;
}
export declare class ContentRegionsListResponse extends SpeakeasyBase {
    contentType: string;
    listRegionsResponse?: shared.ListRegionsResponse;
    statusCode: number;
}
