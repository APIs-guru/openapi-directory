import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsTriggersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsTriggersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsTriggersCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsTriggersCreatePathParams;
    queryParams: CloudbuildProjectsLocationsTriggersCreateQueryParams;
    request?: shared.BuildTriggerInput;
    security: CloudbuildProjectsLocationsTriggersCreateSecurity;
}
export declare class CloudbuildProjectsLocationsTriggersCreateResponse extends SpeakeasyBase {
    buildTrigger?: shared.BuildTrigger;
    contentType: string;
    statusCode: number;
}
