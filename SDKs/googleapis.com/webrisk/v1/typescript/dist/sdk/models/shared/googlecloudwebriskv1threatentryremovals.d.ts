import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudWebriskV1RawIndices } from "./googlecloudwebriskv1rawindices";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";
/**
 * Contains the set of entries to remove from a local database.
**/
export declare class GoogleCloudWebriskV1ThreatEntryRemovals extends SpeakeasyBase {
    rawIndices?: GoogleCloudWebriskV1RawIndices;
    riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
