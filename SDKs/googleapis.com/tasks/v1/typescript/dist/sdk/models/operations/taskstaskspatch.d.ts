import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasksPatchPathParams extends SpeakeasyBase {
    task: string;
    tasklist: string;
}
export declare class TasksTasksPatchQueryParams extends SpeakeasyBase {
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
export declare class TasksTasksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasksPatchRequest extends SpeakeasyBase {
    pathParams: TasksTasksPatchPathParams;
    queryParams: TasksTasksPatchQueryParams;
    request?: shared.Task;
    security: TasksTasksPatchSecurity;
}
export declare class TasksTasksPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
