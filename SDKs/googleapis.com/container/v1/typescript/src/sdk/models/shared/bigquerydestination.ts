import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryDestination
/** 
 * Parameters for using BigQuery as the destination of resource usage export.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}
