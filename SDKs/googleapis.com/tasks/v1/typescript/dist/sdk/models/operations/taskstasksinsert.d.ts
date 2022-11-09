import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasksInsertPathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasksInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    previous?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TasksTasksInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksInsertRequest extends SpeakeasyBase {
    pathParams: TasksTasksInsertPathParams;
    queryParams: TasksTasksInsertQueryParams;
    request?: shared.Task;
    security: TasksTasksInsertSecurity;
}
export declare class TasksTasksInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
