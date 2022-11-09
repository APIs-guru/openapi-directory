import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// Error
/** 
 * Detailed information about an error category.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=pointCount" })
  pointCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
