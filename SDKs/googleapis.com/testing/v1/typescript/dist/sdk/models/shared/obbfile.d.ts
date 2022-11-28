import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * An opaque binary blob file to install on the device before the test starts.
**/
export declare class ObbFile extends SpeakeasyBase {
    obb?: FileReference;
    obbFileName?: string;
}
