import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndemandscanningProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OndemandscanningProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class OndemandscanningProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OndemandscanningProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: OndemandscanningProjectsLocationsOperationsGetPathParams;
    queryParams: OndemandscanningProjectsLocationsOperationsGetQueryParams;
    security: OndemandscanningProjectsLocationsOperationsGetSecurity;
}
export declare class OndemandscanningProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
