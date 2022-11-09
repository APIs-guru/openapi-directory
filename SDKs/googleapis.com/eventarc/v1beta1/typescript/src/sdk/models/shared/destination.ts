import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunService } from "./cloudrunservice";


// Destination
/** 
 * Represents a target of an invocation over HTTP.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudRunService" })
  cloudRunService?: CloudRunService;
}
