import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsTriggersRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsTriggersRunQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsTriggersRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsTriggersRunRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsTriggersRunPathParams;
    queryParams: CloudbuildProjectsLocationsTriggersRunQueryParams;
    request?: shared.RunBuildTriggerRequest;
    security: CloudbuildProjectsLocationsTriggersRunSecurity;
}
export declare class CloudbuildProjectsLocationsTriggersRunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
