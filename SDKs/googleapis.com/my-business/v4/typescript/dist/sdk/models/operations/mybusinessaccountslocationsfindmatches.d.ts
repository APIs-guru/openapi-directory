import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsFindMatchesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsFindMatchesQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsFindMatchesRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsFindMatchesPathParams;
    queryParams: MybusinessAccountsLocationsFindMatchesQueryParams;
    request?: shared.FindMatchingLocationsRequest;
}
export declare class MybusinessAccountsLocationsFindMatchesResponse extends SpeakeasyBase {
    contentType: string;
    findMatchingLocationsResponse?: shared.FindMatchingLocationsResponse;
    statusCode: number;
}
