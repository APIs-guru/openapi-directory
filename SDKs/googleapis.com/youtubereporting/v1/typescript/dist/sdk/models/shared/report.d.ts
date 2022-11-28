import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A report's metadata including the URL from which the report itself can be downloaded.
**/
export declare class Report extends SpeakeasyBase {
    createTime?: string;
    downloadUrl?: string;
    endTime?: string;
    id?: string;
    jobExpireTime?: string;
    jobId?: string;
    startTime?: string;
}
