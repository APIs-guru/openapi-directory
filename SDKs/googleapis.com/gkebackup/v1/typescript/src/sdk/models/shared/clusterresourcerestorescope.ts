import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupKind } from "./groupkind";



// ClusterResourceRestoreScope
/** 
 * Identifies the cluster-scoped resources to restore from the Backup.
**/
export class ClusterResourceRestoreScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedGroupKinds", elemType: GroupKind })
  selectedGroupKinds?: GroupKind[];
}
