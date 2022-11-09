import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";


// GoogleCloudRetailV2alphaBigQuerySource
/** 
 * BigQuery source import data from.
**/
export class GoogleCloudRetailV2alphaBigQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=gcsStagingDir" })
  gcsStagingDir?: string;

  @Metadata({ data: "json, name=partitionDate" })
  partitionDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
