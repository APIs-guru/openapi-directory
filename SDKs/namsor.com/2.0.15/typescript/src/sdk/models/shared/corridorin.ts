import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";


// CorridorIn
/** 
 * Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
**/
export class CorridorIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstLastNameGeoFrom" })
  firstLastNameGeoFrom?: FirstLastNameGeoIn;

  @Metadata({ data: "json, name=firstLastNameGeoTo" })
  firstLastNameGeoTo?: FirstLastNameGeoIn;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
