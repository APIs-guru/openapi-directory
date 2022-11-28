import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeBody } from "./administrativebody";
import { Source } from "./source";



// AdministrationRegion
/** 
 * Describes information about a regional election administrative area.
**/
export class AdministrationRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=electionAdministrationBody" })
  electionAdministrationBody?: AdministrativeBody;

  @SpeakeasyMetadata({ data: "json, name=local_jurisdiction" })
  localJurisdiction?: AdministrationRegion;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];
}
