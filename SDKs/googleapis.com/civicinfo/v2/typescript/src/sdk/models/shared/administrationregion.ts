import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdministrativeBody } from "./administrativebody";
import { AdministrationRegion } from "./administrationregion";
import { Source } from "./source";


// AdministrationRegion
/** 
 * Describes information about a regional election administrative area.
**/
export class AdministrationRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=electionAdministrationBody" })
  electionAdministrationBody?: AdministrativeBody;

  @Metadata({ data: "json, name=local_jurisdiction" })
  localJurisdiction?: AdministrationRegion;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];
}
