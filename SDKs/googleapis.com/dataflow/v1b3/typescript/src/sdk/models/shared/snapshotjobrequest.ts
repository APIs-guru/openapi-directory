import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnapshotJobRequest
/** 
 * Request to create a snapshot of a job.
**/
export class SnapshotJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotSources" })
  snapshotSources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
