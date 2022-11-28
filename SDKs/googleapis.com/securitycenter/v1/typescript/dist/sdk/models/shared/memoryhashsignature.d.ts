import { SpeakeasyBase } from "../../../internal/utils";
import { Detection } from "./detection";
/**
 * A signature corresponding to memory page hashes.
**/
export declare class MemoryHashSignature extends SpeakeasyBase {
    binaryFamily?: string;
    detections?: Detection[];
}
