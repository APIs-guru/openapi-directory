import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasksListPathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    completedMax?: string;
    completedMin?: string;
    dueMax?: string;
    dueMin?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showCompleted?: boolean;
    showDeleted?: boolean;
    showHidden?: boolean;
    updatedMin?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TasksTasksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksListSecurity extends SpeakeasyBase {
    option1?: TasksTasksListSecurityOption1;
    option2?: TasksTasksListSecurityOption2;
}
export declare class TasksTasksListRequest extends SpeakeasyBase {
    pathParams: TasksTasksListPathParams;
    queryParams: TasksTasksListQueryParams;
    security: TasksTasksListSecurity;
}
export declare class TasksTasksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasks?: shared.Tasks;
}
