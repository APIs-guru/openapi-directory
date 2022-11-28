import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsBatchGetReviewsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsBatchGetReviewsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsBatchGetReviewsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsBatchGetReviewsPathParams;
    queryParams: MybusinessAccountsLocationsBatchGetReviewsQueryParams;
    request?: shared.BatchGetReviewsRequest;
}
export declare class MybusinessAccountsLocationsBatchGetReviewsResponse extends SpeakeasyBase {
    batchGetReviewsResponse?: shared.BatchGetReviewsResponse;
    contentType: string;
    statusCode: number;
}
