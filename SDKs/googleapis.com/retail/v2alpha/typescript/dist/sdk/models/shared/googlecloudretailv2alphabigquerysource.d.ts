import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * BigQuery source import data from.
**/
export declare class GoogleCloudRetailV2alphaBigQuerySource extends SpeakeasyBase {
    dataSchema?: string;
    datasetId?: string;
    gcsStagingDir?: string;
    partitionDate?: GoogleTypeDate;
    projectId?: string;
    tableId?: string;
}
