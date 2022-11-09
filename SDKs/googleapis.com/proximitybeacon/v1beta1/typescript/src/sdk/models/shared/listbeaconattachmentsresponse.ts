import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BeaconAttachment } from "./beaconattachment";


// ListBeaconAttachmentsResponse
/** 
 * Response to `ListBeaconAttachments` that contains the requested attachments.
**/
export class ListBeaconAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.BeaconAttachment })
  attachments?: BeaconAttachment[];
}
