import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";



// CorridorIn
/** 
 * Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
**/
export class CorridorIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstLastNameGeoFrom" })
  firstLastNameGeoFrom?: FirstLastNameGeoIn;

  @SpeakeasyMetadata({ data: "json, name=firstLastNameGeoTo" })
  firstLastNameGeoTo?: FirstLastNameGeoIn;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
