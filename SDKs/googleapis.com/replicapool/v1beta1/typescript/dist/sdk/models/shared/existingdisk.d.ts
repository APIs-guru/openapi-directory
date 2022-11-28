import { SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";
/**
 * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
**/
export declare class ExistingDisk extends SpeakeasyBase {
    attachment?: DiskAttachment;
    source?: string;
}
