import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdvertisedId } from "./advertisedid";
import { AttachmentInfo } from "./attachmentinfo";


// BeaconInfo
/** 
 * A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
**/
export class BeaconInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @Metadata({ data: "json, name=attachments", elemType: shared.AttachmentInfo })
  attachments?: AttachmentInfo[];

  @Metadata({ data: "json, name=beaconName" })
  beaconName?: string;
}
