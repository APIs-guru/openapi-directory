import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// FailedData
/** 
 * Further data for the failed state.
**/
export class FailedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;
}
