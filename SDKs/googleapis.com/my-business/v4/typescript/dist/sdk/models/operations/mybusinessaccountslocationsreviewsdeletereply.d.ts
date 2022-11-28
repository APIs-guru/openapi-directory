import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsReviewsDeleteReplyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsReviewsDeleteReplyQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsReviewsDeleteReplyRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsReviewsDeleteReplyPathParams;
    queryParams: MybusinessAccountsLocationsReviewsDeleteReplyQueryParams;
}
export declare class MybusinessAccountsLocationsReviewsDeleteReplyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
