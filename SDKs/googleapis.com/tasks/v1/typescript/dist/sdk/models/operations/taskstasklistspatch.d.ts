import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksTasklistsPatchPathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasklistsPatchQueryParams extends SpeakeasyBase {
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
export declare class TasksTasklistsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsPatchRequest extends SpeakeasyBase {
    pathParams: TasksTasklistsPatchPathParams;
    queryParams: TasksTasklistsPatchQueryParams;
    request?: shared.TaskList;
    security: TasksTasklistsPatchSecurity;
}
export declare class TasksTasklistsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskList?: shared.TaskList;
}
