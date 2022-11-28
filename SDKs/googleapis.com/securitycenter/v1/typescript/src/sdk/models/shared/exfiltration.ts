import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExfilResource } from "./exfilresource";



// Exfiltration
/** 
 * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
**/
export class Exfiltration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources", elemType: ExfilResource })
  sources?: ExfilResource[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: ExfilResource })
  targets?: ExfilResource[];
}
