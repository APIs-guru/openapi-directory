import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiVersion?: string;
    callback?: string;
    dryRun?: string;
    fields?: string;
    key?: string;
    kind?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    propagationPolicy?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsServicesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesDeleteRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesDeletePathParams;
    queryParams: RunProjectsLocationsServicesDeleteQueryParams;
    security: RunProjectsLocationsServicesDeleteSecurity;
}
export declare class RunProjectsLocationsServicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    status?: shared.Status;
    statusCode: number;
}
