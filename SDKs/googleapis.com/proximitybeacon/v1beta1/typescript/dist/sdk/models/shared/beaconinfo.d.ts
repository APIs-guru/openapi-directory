import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertisedId } from "./advertisedid";
import { AttachmentInfo } from "./attachmentinfo";
/**
 * A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
**/
export declare class BeaconInfo extends SpeakeasyBase {
    advertisedId?: AdvertisedId;
    attachments?: AttachmentInfo[];
    beaconName?: string;
}
