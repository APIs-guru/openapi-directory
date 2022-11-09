import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED"
,    Simple = "SIMPLE"
}

export enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED"
,    WriteEmpty = "WRITE_EMPTY"
,    WriteTruncate = "WRITE_TRUNCATE"
,    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination
/** 
 * The BigQuery table for export.
**/
export class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=schemaType" })
  schemaType?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum;

  @Metadata({ data: "json, name=tableUri" })
  tableUri?: string;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum;
}
