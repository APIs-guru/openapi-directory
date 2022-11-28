import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpBody } from "./httpbody";



// BufferTaskRequest
/** 
 * Request message for BufferTask.
**/
export class BufferTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: HttpBody;
}
