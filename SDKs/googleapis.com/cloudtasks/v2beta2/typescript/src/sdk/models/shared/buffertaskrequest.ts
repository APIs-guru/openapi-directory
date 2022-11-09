import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpBody } from "./httpbody";


// BufferTaskRequest
/** 
 * LINT.IfChange Request message for BufferTask.
**/
export class BufferTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: HttpBody;
}
