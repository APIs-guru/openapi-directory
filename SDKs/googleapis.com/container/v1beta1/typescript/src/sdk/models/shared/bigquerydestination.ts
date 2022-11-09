import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryDestination
/** 
 * Parameters for using BigQuery as the destination of resource usage export.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;
}
