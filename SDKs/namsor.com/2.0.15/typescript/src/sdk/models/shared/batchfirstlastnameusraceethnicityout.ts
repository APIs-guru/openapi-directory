import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameUsRaceEthnicityOut } from "./firstlastnameusraceethnicityout";


// BatchFirstLastNameUsRaceEthnicityOut
/** 
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
export class BatchFirstLastNameUsRaceEthnicityOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameUsRaceEthnicityOut })
  personalNames?: FirstLastNameUsRaceEthnicityOut[];
}
