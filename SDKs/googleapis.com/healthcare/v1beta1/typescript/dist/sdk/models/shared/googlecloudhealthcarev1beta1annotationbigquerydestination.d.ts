import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED",
    Simple = "SIMPLE"
}
export declare enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}
/**
 * The BigQuery table for export.
**/
export declare class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination extends SpeakeasyBase {
    force?: boolean;
    schemaType?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum;
    tableUri?: string;
    writeDisposition?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum;
}
