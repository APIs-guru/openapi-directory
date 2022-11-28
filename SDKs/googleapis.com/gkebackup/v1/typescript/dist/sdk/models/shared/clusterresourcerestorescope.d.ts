import { SpeakeasyBase } from "../../../internal/utils";
import { GroupKind } from "./groupkind";
/**
 * Identifies the cluster-scoped resources to restore from the Backup.
**/
export declare class ClusterResourceRestoreScope extends SpeakeasyBase {
    selectedGroupKinds?: GroupKind[];
}
