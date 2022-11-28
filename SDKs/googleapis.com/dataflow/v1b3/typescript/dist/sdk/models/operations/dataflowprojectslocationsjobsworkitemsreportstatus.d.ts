import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1;
    option2?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2;
    option3?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3;
    option4?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams;
    queryParams: DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams;
    request?: shared.ReportWorkItemStatusRequest;
    security: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    reportWorkItemStatusResponse?: shared.ReportWorkItemStatusResponse;
    statusCode: number;
}
