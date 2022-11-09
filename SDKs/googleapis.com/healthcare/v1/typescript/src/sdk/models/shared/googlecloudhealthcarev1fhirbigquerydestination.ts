import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaConfig } from "./schemaconfig";

export enum GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED"
,    WriteEmpty = "WRITE_EMPTY"
,    WriteTruncate = "WRITE_TRUNCATE"
,    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1FhirBigQueryDestination
/** 
 * The configuration for exporting to BigQuery.
**/
export class GoogleCloudHealthcareV1FhirBigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetUri" })
  datasetUri?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=schemaConfig" })
  schemaConfig?: SchemaConfig;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1FhirBigQueryDestinationWriteDispositionEnum;
}
