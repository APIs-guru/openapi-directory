import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksTasklistsUpdatePathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasklistsUpdateQueryParams extends SpeakeasyBase {
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
export declare class TasksTasklistsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsUpdateRequest extends SpeakeasyBase {
    pathParams: TasksTasklistsUpdatePathParams;
    queryParams: TasksTasklistsUpdateQueryParams;
    request?: shared.TaskList;
    security: TasksTasklistsUpdateSecurity;
}
export declare class TasksTasklistsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskList?: shared.TaskList;
}
