import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksTasksUpdatePathParams extends SpeakeasyBase {
    task: string;
    tasklist: string;
}
export declare class TasksTasksUpdateQueryParams extends SpeakeasyBase {
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
export declare class TasksTasksUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksUpdateRequest extends SpeakeasyBase {
    pathParams: TasksTasksUpdatePathParams;
    queryParams: TasksTasksUpdateQueryParams;
    request?: shared.Task;
    security: TasksTasksUpdateSecurity;
}
export declare class TasksTasksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
