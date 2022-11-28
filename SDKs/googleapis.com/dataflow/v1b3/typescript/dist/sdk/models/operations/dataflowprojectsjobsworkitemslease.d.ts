import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsWorkItemsLeasePathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsWorkItemsLeaseQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsJobsWorkItemsLeaseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsLeaseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsLeaseSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsLeaseSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsLeaseSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsWorkItemsLeaseSecurityOption1;
    option2?: DataflowProjectsJobsWorkItemsLeaseSecurityOption2;
    option3?: DataflowProjectsJobsWorkItemsLeaseSecurityOption3;
    option4?: DataflowProjectsJobsWorkItemsLeaseSecurityOption4;
}
export declare class DataflowProjectsJobsWorkItemsLeaseRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsWorkItemsLeasePathParams;
    queryParams: DataflowProjectsJobsWorkItemsLeaseQueryParams;
    request?: shared.LeaseWorkItemRequest;
    security: DataflowProjectsJobsWorkItemsLeaseSecurity;
}
export declare class DataflowProjectsJobsWorkItemsLeaseResponse extends SpeakeasyBase {
    contentType: string;
    leaseWorkItemResponse?: shared.LeaseWorkItemResponse;
    statusCode: number;
}
