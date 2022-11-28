import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";



// CommitRequest
/** 
 * The request for Firestore.Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;

  @SpeakeasyMetadata({ data: "json, name=writes", elemType: Write })
  writes?: Write[];
}
