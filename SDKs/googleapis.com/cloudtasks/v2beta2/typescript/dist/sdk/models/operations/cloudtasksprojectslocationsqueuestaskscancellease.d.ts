import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksCancelLeasePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCancelLeaseQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksCancelLeasePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksCancelLeaseQueryParams;
    request?: shared.CancelLeaseRequest;
    security: CloudtasksProjectsLocationsQueuesTasksCancelLeaseSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
