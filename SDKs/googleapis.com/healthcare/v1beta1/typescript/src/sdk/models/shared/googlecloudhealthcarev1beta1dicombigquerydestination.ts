import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudHealthcareV1beta1DicomBigQueryDestination
/** 
 * The BigQuery table where the server writes output.
**/
export class GoogleCloudHealthcareV1beta1DicomBigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tableUri" })
  tableUri?: string;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum;
}
