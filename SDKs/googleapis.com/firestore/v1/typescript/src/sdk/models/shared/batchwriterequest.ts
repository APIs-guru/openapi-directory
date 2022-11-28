import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";



// BatchWriteRequest
/** 
 * The request for Firestore.BatchWrite.
**/
export class BatchWriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=writes", elemType: Write })
  writes?: Write[];
}
