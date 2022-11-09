import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination } from "./googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination";

export enum GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED"
,    WriteTruncate = "WRITE_TRUNCATE"
,    WriteAppend = "WRITE_APPEND"
}


// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
/** 
 * The request to export insights.
**/
export class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQueryDestination" })
  bigQueryDestination?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
}
