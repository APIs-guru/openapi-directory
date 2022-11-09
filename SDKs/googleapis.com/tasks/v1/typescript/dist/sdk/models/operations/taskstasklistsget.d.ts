import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasklistsGetPathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasklistsGetQueryParams extends SpeakeasyBase {
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
export declare class TasksTasklistsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsGetSecurity extends SpeakeasyBase {
    option1?: TasksTasklistsGetSecurityOption1;
    option2?: TasksTasklistsGetSecurityOption2;
}
export declare class TasksTasklistsGetRequest extends SpeakeasyBase {
    pathParams: TasksTasklistsGetPathParams;
    queryParams: TasksTasklistsGetQueryParams;
    security: TasksTasklistsGetSecurity;
}
export declare class TasksTasklistsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskList?: shared.TaskList;
}
