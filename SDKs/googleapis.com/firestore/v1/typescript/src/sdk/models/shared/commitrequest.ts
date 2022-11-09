import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Write } from "./write";


// CommitRequest
/** 
 * The request for Firestore.Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction?: string;

  @Metadata({ data: "json, name=writes", elemType: shared.Write })
  writes?: Write[];
}
