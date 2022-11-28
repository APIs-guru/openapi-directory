import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesReplaceServicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesReplaceServiceQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesReplaceServiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesReplaceServiceRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesReplaceServicePathParams;
    queryParams: RunProjectsLocationsServicesReplaceServiceQueryParams;
    request?: shared.ServiceInput;
    security: RunProjectsLocationsServicesReplaceServiceSecurity;
}
export declare class RunProjectsLocationsServicesReplaceServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
