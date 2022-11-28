import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessGoogleLocationsSearchQueryParams extends SpeakeasyBase {
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
export declare class MybusinessGoogleLocationsSearchRequest extends SpeakeasyBase {
    queryParams: MybusinessGoogleLocationsSearchQueryParams;
    request?: shared.SearchGoogleLocationsRequestInput;
}
export declare class MybusinessGoogleLocationsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchGoogleLocationsResponse?: shared.SearchGoogleLocationsResponse;
    statusCode: number;
}
