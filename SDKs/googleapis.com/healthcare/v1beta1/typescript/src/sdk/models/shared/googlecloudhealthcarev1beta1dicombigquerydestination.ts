import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED"
,    WriteEmpty = "WRITE_EMPTY"
,    WriteTruncate = "WRITE_TRUNCATE"
,    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1beta1DicomBigQueryDestination
/** 
 * The BigQuery table where the server writes output.
**/
export class GoogleCloudHealthcareV1beta1DicomBigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=tableUri" })
  tableUri?: string;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum;
}
