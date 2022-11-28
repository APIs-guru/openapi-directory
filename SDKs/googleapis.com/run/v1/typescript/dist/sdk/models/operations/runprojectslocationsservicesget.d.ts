import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesGetQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesGetRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesGetPathParams;
    queryParams: RunProjectsLocationsServicesGetQueryParams;
    security: RunProjectsLocationsServicesGetSecurity;
}
export declare class RunProjectsLocationsServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
