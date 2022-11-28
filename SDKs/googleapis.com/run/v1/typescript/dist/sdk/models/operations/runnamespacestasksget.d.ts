import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesTasksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesTasksGetQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesTasksGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesTasksGetRequest extends SpeakeasyBase {
    pathParams: RunNamespacesTasksGetPathParams;
    queryParams: RunNamespacesTasksGetQueryParams;
    security: RunNamespacesTasksGetSecurity;
}
export declare class RunNamespacesTasksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
