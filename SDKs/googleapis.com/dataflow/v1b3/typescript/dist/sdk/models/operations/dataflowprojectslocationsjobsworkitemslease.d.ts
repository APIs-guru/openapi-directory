import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsWorkItemsLeasePathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1;
    option2?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2;
    option3?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3;
    option4?: DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsWorkItemsLeasePathParams;
    queryParams: DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams;
    request?: shared.LeaseWorkItemRequest;
    security: DataflowProjectsLocationsJobsWorkItemsLeaseSecurity;
}
export declare class DataflowProjectsLocationsJobsWorkItemsLeaseResponse extends SpeakeasyBase {
    contentType: string;
    leaseWorkItemResponse?: shared.LeaseWorkItemResponse;
    statusCode: number;
}
