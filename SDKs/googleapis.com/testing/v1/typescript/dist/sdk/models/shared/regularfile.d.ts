import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A file or directory to install on the device before the test starts.
**/
export declare class RegularFile extends SpeakeasyBase {
    content?: FileReference;
    devicePath?: string;
}
