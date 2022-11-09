import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BeaconAttachment } from "./beaconattachment";
/**
 * Response to `ListBeaconAttachments` that contains the requested attachments.
**/
export declare class ListBeaconAttachmentsResponse extends SpeakeasyBase {
    attachments?: BeaconAttachment[];
}
