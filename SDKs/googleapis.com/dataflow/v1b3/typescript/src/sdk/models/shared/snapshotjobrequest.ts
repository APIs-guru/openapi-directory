import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnapshotJobRequest
/** 
 * Request to create a snapshot of a job.
**/
export class SnapshotJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=snapshotSources" })
  snapshotSources?: boolean;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
