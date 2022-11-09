import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1RawIndices } from "./googlecloudwebriskv1rawindices";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";


// GoogleCloudWebriskV1ThreatEntryRemovals
/** 
 * Contains the set of entries to remove from a local database.
**/
export class GoogleCloudWebriskV1ThreatEntryRemovals extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawIndices" })
  rawIndices?: GoogleCloudWebriskV1RawIndices;

  @Metadata({ data: "json, name=riceIndices" })
  riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
