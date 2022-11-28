import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameUsRaceEthnicityOut } from "./firstlastnameusraceethnicityout";



// BatchFirstLastNameUsRaceEthnicityOut
/** 
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
export class BatchFirstLastNameUsRaceEthnicityOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameUsRaceEthnicityOut })
  personalNames?: FirstLastNameUsRaceEthnicityOut[];
}
