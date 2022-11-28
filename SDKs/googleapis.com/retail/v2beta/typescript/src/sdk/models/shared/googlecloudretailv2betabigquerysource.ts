import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";



// GoogleCloudRetailV2betaBigQuerySource
/** 
 * BigQuery source import data from.
**/
export class GoogleCloudRetailV2betaBigQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsStagingDir" })
  gcsStagingDir?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionDate" })
  partitionDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
