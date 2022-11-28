import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinesslodgingLocationsLodgingGetGoogleUpdatedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinesslodgingLocationsLodgingGetGoogleUpdatedQueryParams extends SpeakeasyBase {
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
export declare class MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest extends SpeakeasyBase {
    pathParams: MybusinesslodgingLocationsLodgingGetGoogleUpdatedPathParams;
    queryParams: MybusinesslodgingLocationsLodgingGetGoogleUpdatedQueryParams;
}
export declare class MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse extends SpeakeasyBase {
    contentType: string;
    getGoogleUpdatedLodgingResponse?: shared.GetGoogleUpdatedLodgingResponse;
    statusCode: number;
}
