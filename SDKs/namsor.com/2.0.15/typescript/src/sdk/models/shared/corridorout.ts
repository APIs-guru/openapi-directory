import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";
import { FirstLastNameOriginedOut } from "./firstlastnameoriginedout";


// CorridorOut
/** 
 * Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
**/
export class CorridorOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstLastNameDiasporaedOut" })
  firstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut;

  @Metadata({ data: "json, name=FirstLastNameGenderedOut" })
  firstLastNameGenderedOut?: FirstLastNameGenderedOut;

  @Metadata({ data: "json, name=FirstLastNameOriginedOut" })
  firstLastNameOriginedOut?: FirstLastNameOriginedOut;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
