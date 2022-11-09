import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ReportsIndexPathParams extends SpeakeasyBase {
    reportType: string;
    version: string;
}
export declare class ReportsIndexQueryParams extends SpeakeasyBase {
    endDate: string;
    page: number;
    pageSize: number;
    reportSubTypeId?: number;
    sites: string;
    startDate: string;
}
export declare class ReportsIndexRequest extends SpeakeasyBase {
    pathParams: ReportsIndexPathParams;
    queryParams: ReportsIndexQueryParams;
}
export declare class ReportsIndexResponse extends SpeakeasyBase {
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
