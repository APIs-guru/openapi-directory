import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksBufferPathParams extends SpeakeasyBase {
    queue: string;
    taskId: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksBufferQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksBufferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksBufferRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksBufferPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksBufferQueryParams;
    request?: shared.BufferTaskRequest;
    security: CloudtasksProjectsLocationsQueuesTasksBufferSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksBufferResponse extends SpeakeasyBase {
    bufferTaskResponse?: shared.BufferTaskResponse;
    contentType: string;
    statusCode: number;
}
