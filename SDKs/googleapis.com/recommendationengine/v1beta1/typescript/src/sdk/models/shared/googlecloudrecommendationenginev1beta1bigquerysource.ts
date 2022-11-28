import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1BigQuerySource
/** 
 * BigQuery source import data from.
**/
export class GoogleCloudRecommendationengineV1beta1BigQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsStagingDir" })
  gcsStagingDir?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
