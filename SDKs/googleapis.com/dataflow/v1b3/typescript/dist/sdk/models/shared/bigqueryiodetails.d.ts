import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a BigQuery connector used by the job.
**/
export declare class BigQueryIoDetails extends SpeakeasyBase {
    dataset?: string;
    projectId?: string;
    query?: string;
    table?: string;
}
