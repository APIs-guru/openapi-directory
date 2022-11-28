import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";



// BatchFirstLastNameOriginedOut
/** 
 * Represents the output of inferring the LIKELY origin from a list of personal names.
**/
export class BatchFirstLastNameOriginedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameOriginedOut })
  personalNames?: FirstLastNameOriginedOut[];
}
