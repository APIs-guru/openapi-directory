import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsTriggersPatchPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class CloudbuildProjectsLocationsTriggersPatchQueryParams extends SpeakeasyBase {
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
    triggerId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsTriggersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsTriggersPatchRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsTriggersPatchPathParams;
    queryParams: CloudbuildProjectsLocationsTriggersPatchQueryParams;
    request?: shared.BuildTriggerInput;
    security: CloudbuildProjectsLocationsTriggersPatchSecurity;
}
export declare class CloudbuildProjectsLocationsTriggersPatchResponse extends SpeakeasyBase {
    buildTrigger?: shared.BuildTrigger;
    contentType: string;
    statusCode: number;
}
