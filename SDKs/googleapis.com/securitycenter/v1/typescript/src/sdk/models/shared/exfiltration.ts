import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExfilResource } from "./exfilresource";
import { ExfilResource } from "./exfilresource";


// Exfiltration
/** 
 * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
**/
export class Exfiltration extends SpeakeasyBase {
  @Metadata({ data: "json, name=sources", elemType: shared.ExfilResource })
  sources?: ExfilResource[];

  @Metadata({ data: "json, name=targets", elemType: shared.ExfilResource })
  targets?: ExfilResource[];
}
