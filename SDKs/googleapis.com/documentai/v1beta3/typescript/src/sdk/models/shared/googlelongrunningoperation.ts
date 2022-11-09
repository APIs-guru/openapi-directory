import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleLongrunningOperation
/** 
 * This resource represents a long-running operation that is the result of a network API call.
**/
export class GoogleLongrunningOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=response" })
  response?: Map<string, any>;
}
