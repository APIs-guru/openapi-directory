import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasksGetPathParams extends SpeakeasyBase {
    task: string;
    tasklist: string;
}
export declare class TasksTasksGetQueryParams extends SpeakeasyBase {
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
export declare class TasksTasksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksGetSecurity extends SpeakeasyBase {
    option1?: TasksTasksGetSecurityOption1;
    option2?: TasksTasksGetSecurityOption2;
}
export declare class TasksTasksGetRequest extends SpeakeasyBase {
    pathParams: TasksTasksGetPathParams;
    queryParams: TasksTasksGetQueryParams;
    security: TasksTasksGetSecurity;
}
export declare class TasksTasksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
