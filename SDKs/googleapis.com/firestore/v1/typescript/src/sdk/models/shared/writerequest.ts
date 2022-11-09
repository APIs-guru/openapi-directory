import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Write } from "./write";


// WriteRequest
/** 
 * The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
**/
export class WriteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=streamToken" })
  streamToken?: string;

  @Metadata({ data: "json, name=writes", elemType: shared.Write })
  writes?: Write[];
}
