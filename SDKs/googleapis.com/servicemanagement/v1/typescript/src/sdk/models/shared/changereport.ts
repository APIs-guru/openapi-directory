import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigChange } from "./configchange";



// ChangeReport
/** 
 * Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
**/
export class ChangeReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configChanges", elemType: ConfigChange })
  configChanges?: ConfigChange[];
}
