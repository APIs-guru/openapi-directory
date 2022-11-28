import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaConfig } from "./schemaconfig";


export enum GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1beta1FhirBigQueryDestination
/** 
 * The configuration for exporting to BigQuery.
**/
export class GoogleCloudHealthcareV1beta1FhirBigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetUri" })
  datasetUri?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schemaConfig" })
  schemaConfig?: SchemaConfig;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum;
}
