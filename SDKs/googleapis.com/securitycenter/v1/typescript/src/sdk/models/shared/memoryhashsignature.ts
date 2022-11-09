import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Detection } from "./detection";


// MemoryHashSignature
/** 
 * A signature corresponding to memory page hashes.
**/
export class MemoryHashSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=binaryFamily" })
  binaryFamily?: string;

  @Metadata({ data: "json, name=detections", elemType: shared.Detection })
  detections?: Detection[];
}
