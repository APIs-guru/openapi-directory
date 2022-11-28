import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    skipGracePeriod?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PrivatecaProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsOperationsDeletePathParams;
    queryParams: PrivatecaProjectsLocationsOperationsDeleteQueryParams;
    security: PrivatecaProjectsLocationsOperationsDeleteSecurity;
}
export declare class PrivatecaProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
