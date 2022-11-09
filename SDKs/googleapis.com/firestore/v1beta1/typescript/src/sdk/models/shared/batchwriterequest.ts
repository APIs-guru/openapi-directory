import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Write } from "./write";


// BatchWriteRequest
/** 
 * The request for Firestore.BatchWrite.
**/
export class BatchWriteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=writes", elemType: shared.Write })
  writes?: Write[];
}
