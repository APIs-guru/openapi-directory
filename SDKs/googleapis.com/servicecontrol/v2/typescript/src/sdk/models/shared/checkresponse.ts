import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// CheckResponse
/** 
 * Response message for the Check method.
**/
export class CheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
