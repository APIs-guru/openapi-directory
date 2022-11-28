import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsGetGoogleUpdatedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsGetGoogleUpdatedQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsGetGoogleUpdatedRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsGetGoogleUpdatedPathParams;
    queryParams: MybusinessAccountsLocationsGetGoogleUpdatedQueryParams;
}
export declare class MybusinessAccountsLocationsGetGoogleUpdatedResponse extends SpeakeasyBase {
    contentType: string;
    googleUpdatedLocation?: shared.GoogleUpdatedLocation;
    statusCode: number;
}
