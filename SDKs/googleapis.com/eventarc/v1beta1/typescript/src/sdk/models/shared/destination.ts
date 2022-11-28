import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRunService } from "./cloudrunservice";



// Destination
/** 
 * Represents a target of an invocation over HTTP.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRunService" })
  cloudRunService?: CloudRunService;
}
