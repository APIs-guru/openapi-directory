import { SpeakeasyBase } from "../../../internal/utils";
import { ObbFile } from "./obbfile";
import { RegularFile } from "./regularfile";
/**
 * A single device file description.
**/
export declare class DeviceFile extends SpeakeasyBase {
    obbFile?: ObbFile;
    regularFile?: RegularFile;
}
