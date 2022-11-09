import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlloyDbSettings } from "./alloydbsettings";


// AlloyDbConnectionProfile
/** 
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
export class AlloyDbConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: AlloyDbSettings;
}
