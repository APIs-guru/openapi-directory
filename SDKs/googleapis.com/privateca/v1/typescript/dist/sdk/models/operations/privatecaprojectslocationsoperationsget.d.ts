import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PrivatecaProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsOperationsGetPathParams;
    queryParams: PrivatecaProjectsLocationsOperationsGetQueryParams;
    security: PrivatecaProjectsLocationsOperationsGetSecurity;
}
export declare class PrivatecaProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
