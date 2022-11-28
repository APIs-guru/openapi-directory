import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpannerIoDetails
/** 
 * Metadata for a Spanner connector used by the job.
**/
export class SpannerIoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
