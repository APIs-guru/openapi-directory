import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksLeasePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTasksLeaseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksLeaseRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksLeasePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksLeaseQueryParams;
    request?: shared.LeaseTasksRequest;
    security: CloudtasksProjectsLocationsQueuesTasksLeaseSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksLeaseResponse extends SpeakeasyBase {
    contentType: string;
    leaseTasksResponse?: shared.LeaseTasksResponse;
    statusCode: number;
}
