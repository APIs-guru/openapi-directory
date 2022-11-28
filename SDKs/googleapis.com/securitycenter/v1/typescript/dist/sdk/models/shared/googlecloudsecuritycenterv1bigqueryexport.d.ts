import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures how to deliver Findings to BigQuery Instance.
**/
export declare class GoogleCloudSecuritycenterV1BigQueryExportInput extends SpeakeasyBase {
    dataset?: string;
    description?: string;
    filter?: string;
    name?: string;
}
/**
 * Configures how to deliver Findings to BigQuery Instance.
**/
export declare class GoogleCloudSecuritycenterV1BigQueryExport extends SpeakeasyBase {
    createTime?: string;
    dataset?: string;
    description?: string;
    filter?: string;
    mostRecentEditor?: string;
    name?: string;
    principal?: string;
    updateTime?: string;
}
