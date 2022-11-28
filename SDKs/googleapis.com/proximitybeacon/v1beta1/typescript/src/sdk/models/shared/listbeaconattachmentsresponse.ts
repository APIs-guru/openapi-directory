import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeaconAttachment } from "./beaconattachment";



// ListBeaconAttachmentsResponse
/** 
 * Response to `ListBeaconAttachments` that contains the requested attachments.
**/
export class ListBeaconAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: BeaconAttachment })
  attachments?: BeaconAttachment[];
}
