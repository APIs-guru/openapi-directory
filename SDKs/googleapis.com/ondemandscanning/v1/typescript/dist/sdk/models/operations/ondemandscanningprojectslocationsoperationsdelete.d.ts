import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndemandscanningProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OndemandscanningProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class OndemandscanningProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OndemandscanningProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: OndemandscanningProjectsLocationsOperationsDeletePathParams;
    queryParams: OndemandscanningProjectsLocationsOperationsDeleteQueryParams;
    security: OndemandscanningProjectsLocationsOperationsDeleteSecurity;
}
export declare class OndemandscanningProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
