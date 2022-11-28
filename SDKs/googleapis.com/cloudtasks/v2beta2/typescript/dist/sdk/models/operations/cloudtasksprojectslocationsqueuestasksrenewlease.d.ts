import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksRenewLeasePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksRenewLeaseQueryParams;
    request?: shared.RenewLeaseRequest;
    security: CloudtasksProjectsLocationsQueuesTasksRenewLeaseSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
