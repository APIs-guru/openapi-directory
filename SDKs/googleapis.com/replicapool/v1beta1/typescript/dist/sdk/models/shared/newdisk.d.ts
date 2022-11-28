import { SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";
import { NewDiskInitializeParams } from "./newdiskinitializeparams";
/**
 * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
**/
export declare class NewDisk extends SpeakeasyBase {
    attachment?: DiskAttachment;
    autoDelete?: boolean;
    boot?: boolean;
    initializeParams?: NewDiskInitializeParams;
}
