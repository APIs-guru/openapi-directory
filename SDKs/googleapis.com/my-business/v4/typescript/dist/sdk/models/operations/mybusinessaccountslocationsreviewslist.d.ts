import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsReviewsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsReviewsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsReviewsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsReviewsListPathParams;
    queryParams: MybusinessAccountsLocationsReviewsListQueryParams;
}
export declare class MybusinessAccountsLocationsReviewsListResponse extends SpeakeasyBase {
    contentType: string;
    listReviewsResponse?: shared.ListReviewsResponse;
    statusCode: number;
}
