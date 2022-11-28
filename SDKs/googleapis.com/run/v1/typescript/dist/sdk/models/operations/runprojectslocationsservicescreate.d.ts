import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsServicesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsServicesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesCreateRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesCreatePathParams;
    queryParams: RunProjectsLocationsServicesCreateQueryParams;
    request?: shared.ServiceInput;
    security: RunProjectsLocationsServicesCreateSecurity;
}
export declare class RunProjectsLocationsServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
