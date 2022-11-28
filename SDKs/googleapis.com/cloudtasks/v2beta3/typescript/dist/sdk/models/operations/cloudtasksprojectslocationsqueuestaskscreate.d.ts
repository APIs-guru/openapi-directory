import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCreateRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksCreatePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksCreateQueryParams;
    request?: shared.CreateTaskRequest;
    security: CloudtasksProjectsLocationsQueuesTasksCreateSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
