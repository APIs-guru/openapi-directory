import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination } from "./googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination";


export enum GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
/** 
 * The request to export insights.
**/
export class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQueryDestination" })
  bigQueryDestination?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
}
