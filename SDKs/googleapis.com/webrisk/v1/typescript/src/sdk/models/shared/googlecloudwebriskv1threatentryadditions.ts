import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1RawHashes } from "./googlecloudwebriskv1rawhashes";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";



// GoogleCloudWebriskV1ThreatEntryAdditions
/** 
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
**/
export class GoogleCloudWebriskV1ThreatEntryAdditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawHashes", elemType: GoogleCloudWebriskV1RawHashes })
  rawHashes?: GoogleCloudWebriskV1RawHashes[];

  @SpeakeasyMetadata({ data: "json, name=riceHashes" })
  riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
