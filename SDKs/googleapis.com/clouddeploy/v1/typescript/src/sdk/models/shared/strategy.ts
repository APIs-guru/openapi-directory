import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Standard } from "./standard";



// Strategy
/** 
 * Strategy contains deployment strategy information.
**/
export class Strategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=standard" })
  standard?: Standard;
}
