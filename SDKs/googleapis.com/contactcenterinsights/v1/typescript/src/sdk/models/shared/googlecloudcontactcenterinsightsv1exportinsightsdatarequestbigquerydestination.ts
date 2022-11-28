import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination
/** 
 * A BigQuery Table Reference.
**/
export class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
