import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ReportStatus } from "./reportstatus";
/**
 * Report metadata.
**/
export declare class ReportMetadata extends SpeakeasyBase {
    googleCloudStoragePath?: string;
    reportDataEndDate?: Date;
    reportDataStartDate?: Date;
    status?: ReportStatus;
}
