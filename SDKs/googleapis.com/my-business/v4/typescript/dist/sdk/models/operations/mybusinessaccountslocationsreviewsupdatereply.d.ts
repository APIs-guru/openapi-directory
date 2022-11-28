import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsReviewsUpdateReplyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsReviewsUpdateReplyQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsReviewsUpdateReplyRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsReviewsUpdateReplyPathParams;
    queryParams: MybusinessAccountsLocationsReviewsUpdateReplyQueryParams;
    request?: shared.ReviewReply;
}
export declare class MybusinessAccountsLocationsReviewsUpdateReplyResponse extends SpeakeasyBase {
    contentType: string;
    reviewReply?: shared.ReviewReply;
    statusCode: number;
}
