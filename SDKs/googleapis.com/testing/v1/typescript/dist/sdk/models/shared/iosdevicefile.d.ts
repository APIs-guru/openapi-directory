import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A file or directory to install on the device before the test starts.
**/
export declare class IosDeviceFile extends SpeakeasyBase {
    bundleId?: string;
    content?: FileReference;
    devicePath?: string;
}
