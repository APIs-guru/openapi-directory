import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpannerIoDetails
/** 
 * Metadata for a Spanner connector used by the job.
**/
export class SpannerIoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
