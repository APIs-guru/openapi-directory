import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudtasksProjectsLocationsQueuesTasksGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    responseView?: CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksGetRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksGetPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksGetQueryParams;
    security: CloudtasksProjectsLocationsQueuesTasksGetSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
