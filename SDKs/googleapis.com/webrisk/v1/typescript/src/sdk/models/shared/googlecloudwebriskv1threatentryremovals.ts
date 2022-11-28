import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1RawIndices } from "./googlecloudwebriskv1rawindices";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";



// GoogleCloudWebriskV1ThreatEntryRemovals
/** 
 * Contains the set of entries to remove from a local database.
**/
export class GoogleCloudWebriskV1ThreatEntryRemovals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawIndices" })
  rawIndices?: GoogleCloudWebriskV1RawIndices;

  @SpeakeasyMetadata({ data: "json, name=riceIndices" })
  riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
