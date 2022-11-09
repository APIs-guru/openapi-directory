import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasklistsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TasksTasklistsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsListSecurity extends SpeakeasyBase {
    option1?: TasksTasklistsListSecurityOption1;
    option2?: TasksTasklistsListSecurityOption2;
}
export declare class TasksTasklistsListRequest extends SpeakeasyBase {
    queryParams: TasksTasklistsListQueryParams;
    security: TasksTasklistsListSecurity;
}
export declare class TasksTasklistsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskLists?: shared.TaskLists;
}
