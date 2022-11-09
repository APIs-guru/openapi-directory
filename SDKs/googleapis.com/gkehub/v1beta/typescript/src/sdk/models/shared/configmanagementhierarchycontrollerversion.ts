import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementHierarchyControllerVersion
/** 
 * Version for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=hnc" })
  hnc?: string;
}
