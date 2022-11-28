import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaConfig } from "./schemaconfig";
export declare enum GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}
/**
 * The configuration for exporting to BigQuery.
**/
export declare class GoogleCloudHealthcareV1beta1FhirBigQueryDestination extends SpeakeasyBase {
    datasetUri?: string;
    force?: boolean;
    schemaConfig?: SchemaConfig;
    writeDisposition?: GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum;
}
