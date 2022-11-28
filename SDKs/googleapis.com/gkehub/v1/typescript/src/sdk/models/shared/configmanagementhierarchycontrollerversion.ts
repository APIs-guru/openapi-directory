import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementHierarchyControllerVersion
/** 
 * Version for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=hnc" })
  hnc?: string;
}
