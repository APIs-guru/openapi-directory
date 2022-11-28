import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination } from "./googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination";
export declare enum GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}
/**
 * The request to export insights.
**/
export declare class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest extends SpeakeasyBase {
    bigQueryDestination?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;
    filter?: string;
    kmsKey?: string;
    parent?: string;
    writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
}
