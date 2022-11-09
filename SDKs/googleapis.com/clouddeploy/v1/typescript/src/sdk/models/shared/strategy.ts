import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Standard } from "./standard";


// Strategy
/** 
 * Strategy contains deployment strategy information.
**/
export class Strategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=standard" })
  standard?: Standard;
}
