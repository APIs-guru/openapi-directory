import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsLodgingGetGoogleUpdatedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsLodgingGetGoogleUpdatedQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsLodgingGetGoogleUpdatedPathParams;
    queryParams: MybusinessAccountsLocationsLodgingGetGoogleUpdatedQueryParams;
}
export declare class MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse extends SpeakeasyBase {
    contentType: string;
    getGoogleUpdatedLodgingResponse?: shared.GetGoogleUpdatedLodgingResponse;
    statusCode: number;
}
