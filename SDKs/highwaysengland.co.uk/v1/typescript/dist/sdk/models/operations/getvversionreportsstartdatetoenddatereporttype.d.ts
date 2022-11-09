import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetVVersionReportsStartDateToEndDateReportTypePathParams extends SpeakeasyBase {
    endDate: string;
    reportType: string;
    startDate: string;
    version: string;
}
export declare class GetVVersionReportsStartDateToEndDateReportTypeQueryParams extends SpeakeasyBase {
    page: number;
    pageSize: number;
    reportSubTypeId?: number;
    sites: string;
}
export declare class GetVVersionReportsStartDateToEndDateReportTypeRequest extends SpeakeasyBase {
    pathParams: GetVVersionReportsStartDateToEndDateReportTypePathParams;
    queryParams: GetVVersionReportsStartDateToEndDateReportTypeQueryParams;
}
export declare class GetVVersionReportsStartDateToEndDateReportTypeResponse extends SpeakeasyBase {
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
