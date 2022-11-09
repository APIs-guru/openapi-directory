import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportStatus } from "./reportstatus";
/**
 * Report metadata.
**/
export declare class ReportMetadata extends SpeakeasyBase {
    googleCloudStoragePath?: string;
    reportDataEndTimeMs?: string;
    reportDataStartTimeMs?: string;
    status?: ReportStatus;
}
