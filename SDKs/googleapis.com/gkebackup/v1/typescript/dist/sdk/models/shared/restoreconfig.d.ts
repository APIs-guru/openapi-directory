import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterResourceRestoreScope } from "./clusterresourcerestorescope";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
import { SubstitutionRule } from "./substitutionrule";
export declare enum RestoreConfigClusterResourceConflictPolicyEnum {
    ClusterResourceConflictPolicyUnspecified = "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
    UseExistingVersion = "USE_EXISTING_VERSION",
    UseBackupVersion = "USE_BACKUP_VERSION"
}
export declare enum RestoreConfigNamespacedResourceRestoreModeEnum {
    NamespacedResourceRestoreModeUnspecified = "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
    DeleteAndRestore = "DELETE_AND_RESTORE",
    FailOnConflict = "FAIL_ON_CONFLICT"
}
export declare enum RestoreConfigVolumeDataRestorePolicyEnum {
    VolumeDataRestorePolicyUnspecified = "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED",
    RestoreVolumeDataFromBackup = "RESTORE_VOLUME_DATA_FROM_BACKUP",
    ReuseVolumeHandleFromBackup = "REUSE_VOLUME_HANDLE_FROM_BACKUP",
    NoVolumeDataRestoration = "NO_VOLUME_DATA_RESTORATION"
}
/**
 * Configuration of a restore. Next id: 9
**/
export declare class RestoreConfig extends SpeakeasyBase {
    allNamespaces?: boolean;
    clusterResourceConflictPolicy?: RestoreConfigClusterResourceConflictPolicyEnum;
    clusterResourceRestoreScope?: ClusterResourceRestoreScope;
    namespacedResourceRestoreMode?: RestoreConfigNamespacedResourceRestoreModeEnum;
    selectedApplications?: NamespacedNames;
    selectedNamespaces?: Namespaces;
    substitutionRules?: SubstitutionRule[];
    volumeDataRestorePolicy?: RestoreConfigVolumeDataRestorePolicyEnum;
}
