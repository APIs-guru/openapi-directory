import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteEmpty = "WRITE_EMPTY",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}
/**
 * The BigQuery table where the server writes output.
**/
export declare class GoogleCloudHealthcareV1beta1DicomBigQueryDestination extends SpeakeasyBase {
    force?: boolean;
    tableUri?: string;
    writeDisposition?: GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum;
}
