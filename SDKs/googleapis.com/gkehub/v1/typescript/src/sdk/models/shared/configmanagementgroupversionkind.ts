import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementGroupVersionKind
/** 
 * A Kubernetes object's GVK
**/
export class ConfigManagementGroupVersionKind extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
