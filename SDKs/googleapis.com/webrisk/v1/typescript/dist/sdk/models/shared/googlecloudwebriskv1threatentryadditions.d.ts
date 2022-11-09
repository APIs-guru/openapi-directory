import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1RawHashes } from "./googlecloudwebriskv1rawhashes";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";
/**
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
**/
export declare class GoogleCloudWebriskV1ThreatEntryAdditions extends SpeakeasyBase {
    rawHashes?: GoogleCloudWebriskV1RawHashes[];
    riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
