import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination
/** 
 * A BigQuery Table Reference.
**/
export class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
