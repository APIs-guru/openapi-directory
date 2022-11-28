import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum {
    SchemaTypeUnspecified = "SCHEMA_TYPE_UNSPECIFIED",
    Simple = "SIMPLE"
}

export enum GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination
/** 
 * The BigQuery table for export.
**/
export class GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schemaType" })
  schemaType?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationSchemaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tableUri" })
  tableUri?: string;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1beta1AnnotationBigQueryDestinationWriteDispositionEnum;
}
