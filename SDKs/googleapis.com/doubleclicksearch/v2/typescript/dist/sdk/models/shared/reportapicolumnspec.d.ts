import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request object used to create a DoubleClick Search report.
**/
export declare class ReportApiColumnSpec extends SpeakeasyBase {
    columnName?: string;
    customDimensionName?: string;
    customMetricName?: string;
    endDate?: string;
    groupByColumn?: boolean;
    headerText?: string;
    platformSource?: string;
    productReportPerspective?: string;
    savedColumnName?: string;
    startDate?: string;
}
