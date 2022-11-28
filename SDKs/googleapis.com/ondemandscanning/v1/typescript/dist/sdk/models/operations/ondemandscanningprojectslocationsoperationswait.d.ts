import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndemandscanningProjectsLocationsOperationsWaitPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OndemandscanningProjectsLocationsOperationsWaitQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    timeout?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OndemandscanningProjectsLocationsOperationsWaitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OndemandscanningProjectsLocationsOperationsWaitRequest extends SpeakeasyBase {
    pathParams: OndemandscanningProjectsLocationsOperationsWaitPathParams;
    queryParams: OndemandscanningProjectsLocationsOperationsWaitQueryParams;
    security: OndemandscanningProjectsLocationsOperationsWaitSecurity;
}
export declare class OndemandscanningProjectsLocationsOperationsWaitResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
