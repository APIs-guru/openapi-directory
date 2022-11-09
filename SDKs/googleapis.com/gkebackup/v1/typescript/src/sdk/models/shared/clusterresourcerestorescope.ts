import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupKind } from "./groupkind";


// ClusterResourceRestoreScope
/** 
 * Identifies the cluster-scoped resources to restore from the Backup.
**/
export class ClusterResourceRestoreScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=selectedGroupKinds", elemType: shared.GroupKind })
  selectedGroupKinds?: GroupKind[];
}
