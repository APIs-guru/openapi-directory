import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudWebriskV1RawHashes } from "./googlecloudwebriskv1rawhashes";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";


// GoogleCloudWebriskV1ThreatEntryAdditions
/** 
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
**/
export class GoogleCloudWebriskV1ThreatEntryAdditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawHashes", elemType: shared.GoogleCloudWebriskV1RawHashes })
  rawHashes?: GoogleCloudWebriskV1RawHashes[];

  @Metadata({ data: "json, name=riceHashes" })
  riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
