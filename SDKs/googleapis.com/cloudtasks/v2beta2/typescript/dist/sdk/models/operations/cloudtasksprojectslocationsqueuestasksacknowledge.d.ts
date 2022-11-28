import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksAcknowledgePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksAcknowledgeQueryParams;
    request?: shared.AcknowledgeTaskRequest;
    security: CloudtasksProjectsLocationsQueuesTasksAcknowledgeSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
