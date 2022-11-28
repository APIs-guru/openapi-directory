import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersRunPathParams extends SpeakeasyBase {
    projectId: string;
    triggerId: string;
}
export declare class CloudbuildProjectsTriggersRunQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsTriggersRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersRunRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersRunPathParams;
    queryParams: CloudbuildProjectsTriggersRunQueryParams;
    request?: shared.RepoSource;
    security: CloudbuildProjectsTriggersRunSecurity;
}
export declare class CloudbuildProjectsTriggersRunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
