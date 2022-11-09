import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";


// BatchFirstLastNameOriginedOut
/** 
 * Represents the output of inferring the LIKELY origin from a list of personal names.
**/
export class BatchFirstLastNameOriginedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameOriginedOut })
  personalNames?: FirstLastNameOriginedOut[];
}
