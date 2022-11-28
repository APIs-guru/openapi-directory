import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsLocalPostsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsLocalPostsListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsLocalPostsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsLocalPostsListPathParams;
    queryParams: MybusinessAccountsLocationsLocalPostsListQueryParams;
}
export declare class MybusinessAccountsLocationsLocalPostsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocalPostsResponse?: shared.ListLocalPostsResponse;
    statusCode: number;
}
