import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Routing } from "./routing";


// Configuration
/** 
 * Specifies general configurations that are taken into account when solving the vehicle routing problem.
**/
export class Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=routing" })
  routing?: Routing;
}
