import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementGroupVersionKind } from "./configmanagementgroupversionkind";


// ConfigManagementErrorResource
/** 
 * Model for a config file in the git repo with an associated Sync error
**/
export class ConfigManagementErrorResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGvk" })
  resourceGvk?: ConfigManagementGroupVersionKind;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceNamespace" })
  resourceNamespace?: string;

  @Metadata({ data: "json, name=sourcePath" })
  sourcePath?: string;
}
