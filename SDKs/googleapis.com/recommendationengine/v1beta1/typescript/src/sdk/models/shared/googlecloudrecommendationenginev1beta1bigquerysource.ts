import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1BigQuerySource
/** 
 * BigQuery source import data from.
**/
export class GoogleCloudRecommendationengineV1beta1BigQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=gcsStagingDir" })
  gcsStagingDir?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
