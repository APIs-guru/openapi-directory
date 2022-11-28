import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryIoDetails
/** 
 * Metadata for a BigQuery connector used by the job.
**/
export class BigQueryIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
