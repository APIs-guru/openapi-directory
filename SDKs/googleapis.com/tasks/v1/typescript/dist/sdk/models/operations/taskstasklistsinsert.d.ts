import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasklistsInsertQueryParams extends SpeakeasyBase {
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
export declare class TasksTasklistsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsInsertRequest extends SpeakeasyBase {
    queryParams: TasksTasklistsInsertQueryParams;
    request?: shared.TaskList;
    security: TasksTasklistsInsertSecurity;
}
export declare class TasksTasklistsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskList?: shared.TaskList;
}
