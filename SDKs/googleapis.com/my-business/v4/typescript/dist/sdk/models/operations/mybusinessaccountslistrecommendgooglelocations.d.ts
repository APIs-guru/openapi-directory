import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsListRecommendGoogleLocationsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsListRecommendGoogleLocationsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsListRecommendGoogleLocationsRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsListRecommendGoogleLocationsPathParams;
    queryParams: MybusinessAccountsListRecommendGoogleLocationsQueryParams;
}
export declare class MybusinessAccountsListRecommendGoogleLocationsResponse extends SpeakeasyBase {
    contentType: string;
    listRecommendedGoogleLocationsResponse?: shared.ListRecommendedGoogleLocationsResponse;
    statusCode: number;
}
