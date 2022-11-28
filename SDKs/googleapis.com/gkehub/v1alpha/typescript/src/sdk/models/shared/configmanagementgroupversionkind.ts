import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementGroupVersionKind
/** 
 * A Kubernetes object's GVK
**/
export class ConfigManagementGroupVersionKind extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
