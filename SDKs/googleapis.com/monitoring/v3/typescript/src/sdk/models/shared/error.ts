import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// Error
/** 
 * Detailed information about an error category.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pointCount" })
  pointCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
