import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterResourceRestoreScope } from "./clusterresourcerestorescope";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
import { SubstitutionRule } from "./substitutionrule";


export enum RestoreConfigClusterResourceConflictPolicyEnum {
    ClusterResourceConflictPolicyUnspecified = "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED",
    UseExistingVersion = "USE_EXISTING_VERSION",
    UseBackupVersion = "USE_BACKUP_VERSION"
}

export enum RestoreConfigNamespacedResourceRestoreModeEnum {
    NamespacedResourceRestoreModeUnspecified = "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED",
    DeleteAndRestore = "DELETE_AND_RESTORE",
    FailOnConflict = "FAIL_ON_CONFLICT"
}

export enum RestoreConfigVolumeDataRestorePolicyEnum {
    VolumeDataRestorePolicyUnspecified = "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED",
    RestoreVolumeDataFromBackup = "RESTORE_VOLUME_DATA_FROM_BACKUP",
    ReuseVolumeHandleFromBackup = "REUSE_VOLUME_HANDLE_FROM_BACKUP",
    NoVolumeDataRestoration = "NO_VOLUME_DATA_RESTORATION"
}


// RestoreConfig
/** 
 * Configuration of a restore. Next id: 9
**/
export class RestoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allNamespaces" })
  allNamespaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterResourceConflictPolicy" })
  clusterResourceConflictPolicy?: RestoreConfigClusterResourceConflictPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=clusterResourceRestoreScope" })
  clusterResourceRestoreScope?: ClusterResourceRestoreScope;

  @SpeakeasyMetadata({ data: "json, name=namespacedResourceRestoreMode" })
  namespacedResourceRestoreMode?: RestoreConfigNamespacedResourceRestoreModeEnum;

  @SpeakeasyMetadata({ data: "json, name=selectedApplications" })
  selectedApplications?: NamespacedNames;

  @SpeakeasyMetadata({ data: "json, name=selectedNamespaces" })
  selectedNamespaces?: Namespaces;

  @SpeakeasyMetadata({ data: "json, name=substitutionRules", elemType: SubstitutionRule })
  substitutionRules?: SubstitutionRule[];

  @SpeakeasyMetadata({ data: "json, name=volumeDataRestorePolicy" })
  volumeDataRestorePolicy?: RestoreConfigVolumeDataRestorePolicyEnum;
}
