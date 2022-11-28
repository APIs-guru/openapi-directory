import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGroupVersionKind } from "./configmanagementgroupversionkind";



// ConfigManagementErrorResource
/** 
 * Model for a config file in the git repo with an associated Sync error
**/
export class ConfigManagementErrorResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGvk" })
  resourceGvk?: ConfigManagementGroupVersionKind;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceNamespace" })
  resourceNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePath" })
  sourcePath?: string;
}
