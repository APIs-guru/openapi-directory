import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigChange } from "./configchange";


// ChangeReport
/** 
 * Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
**/
export class ChangeReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=configChanges", elemType: shared.ConfigChange })
  configChanges?: ConfigChange[];
}
