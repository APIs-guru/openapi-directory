import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsWorkItemsReportStatusPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption1;
    option2?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption2;
    option3?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption3;
    option4?: DataflowProjectsJobsWorkItemsReportStatusSecurityOption4;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsWorkItemsReportStatusPathParams;
    queryParams: DataflowProjectsJobsWorkItemsReportStatusQueryParams;
    request?: shared.ReportWorkItemStatusRequest;
    security: DataflowProjectsJobsWorkItemsReportStatusSecurity;
}
export declare class DataflowProjectsJobsWorkItemsReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    reportWorkItemStatusResponse?: shared.ReportWorkItemStatusResponse;
    statusCode: number;
}
