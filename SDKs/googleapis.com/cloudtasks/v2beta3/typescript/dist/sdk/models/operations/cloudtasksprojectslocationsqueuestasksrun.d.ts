import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRunQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRunRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksRunPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksRunQueryParams;
    request?: shared.RunTaskRequest;
    security: CloudtasksProjectsLocationsQueuesTasksRunSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
