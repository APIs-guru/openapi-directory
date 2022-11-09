import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TasksTasklistsDeletePathParams extends SpeakeasyBase {
    tasklist: string;
}
export declare class TasksTasklistsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TasksTasklistsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TasksTasklistsDeleteRequest extends SpeakeasyBase {
    pathParams: TasksTasklistsDeletePathParams;
    queryParams: TasksTasklistsDeleteQueryParams;
    security: TasksTasklistsDeleteSecurity;
}
export declare class TasksTasklistsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
