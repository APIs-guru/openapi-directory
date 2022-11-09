import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasksDeletePathParams extends SpeakeasyBase {
    task: string;
    tasklist: string;
}
export declare class TasksTasksDeleteQueryParams extends SpeakeasyBase {
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
export declare class TasksTasksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksDeleteRequest extends SpeakeasyBase {
    pathParams: TasksTasksDeletePathParams;
    queryParams: TasksTasksDeleteQueryParams;
    security: TasksTasksDeleteSecurity;
}
export declare class TasksTasksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
