import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertisedId } from "./advertisedid";
import { AttachmentInfo } from "./attachmentinfo";



// BeaconInfo
/** 
 * A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
**/
export class BeaconInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: AttachmentInfo })
  attachments?: AttachmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=beaconName" })
  beaconName?: string;
}
