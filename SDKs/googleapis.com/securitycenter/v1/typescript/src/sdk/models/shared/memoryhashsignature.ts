import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Detection } from "./detection";



// MemoryHashSignature
/** 
 * A signature corresponding to memory page hashes.
**/
export class MemoryHashSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binaryFamily" })
  binaryFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=detections", elemType: Detection })
  detections?: Detection[];
}
