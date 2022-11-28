import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";



// CorridorOut
/** 
 * Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
**/
export class CorridorOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstLastNameDiasporaedOut" })
  firstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut;

  @SpeakeasyMetadata({ data: "json, name=FirstLastNameGenderedOut" })
  firstLastNameGenderedOut?: FirstLastNameGenderedOut;

  @SpeakeasyMetadata({ data: "json, name=FirstLastNameOriginedOut" })
  firstLastNameOriginedOut?: FirstLastNameOriginedOut;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
