import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryIoDetails
/** 
 * Metadata for a BigQuery connector used by the job.
**/
export class BigQueryIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
