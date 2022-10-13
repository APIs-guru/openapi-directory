package shared

type RestoreConfigClusterResourceConflictPolicyEnum string

const (
	RestoreConfigClusterResourceConflictPolicyEnumClusterResourceConflictPolicyUnspecified RestoreConfigClusterResourceConflictPolicyEnum = "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED"
	RestoreConfigClusterResourceConflictPolicyEnumUseExistingVersion                       RestoreConfigClusterResourceConflictPolicyEnum = "USE_EXISTING_VERSION"
	RestoreConfigClusterResourceConflictPolicyEnumUseBackupVersion                         RestoreConfigClusterResourceConflictPolicyEnum = "USE_BACKUP_VERSION"
)

type RestoreConfigNamespacedResourceRestoreModeEnum string

const (
	RestoreConfigNamespacedResourceRestoreModeEnumNamespacedResourceRestoreModeUnspecified RestoreConfigNamespacedResourceRestoreModeEnum = "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED"
	RestoreConfigNamespacedResourceRestoreModeEnumDeleteAndRestore                         RestoreConfigNamespacedResourceRestoreModeEnum = "DELETE_AND_RESTORE"
	RestoreConfigNamespacedResourceRestoreModeEnumFailOnConflict                           RestoreConfigNamespacedResourceRestoreModeEnum = "FAIL_ON_CONFLICT"
)

type RestoreConfigVolumeDataRestorePolicyEnum string

const (
	RestoreConfigVolumeDataRestorePolicyEnumVolumeDataRestorePolicyUnspecified RestoreConfigVolumeDataRestorePolicyEnum = "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED"
	RestoreConfigVolumeDataRestorePolicyEnumRestoreVolumeDataFromBackup        RestoreConfigVolumeDataRestorePolicyEnum = "RESTORE_VOLUME_DATA_FROM_BACKUP"
	RestoreConfigVolumeDataRestorePolicyEnumReuseVolumeHandleFromBackup        RestoreConfigVolumeDataRestorePolicyEnum = "REUSE_VOLUME_HANDLE_FROM_BACKUP"
	RestoreConfigVolumeDataRestorePolicyEnumNoVolumeDataRestoration            RestoreConfigVolumeDataRestorePolicyEnum = "NO_VOLUME_DATA_RESTORATION"
)

type RestoreConfig struct {
	AllNamespaces                 *bool                                           `json:"allNamespaces"`
	ClusterResourceConflictPolicy *RestoreConfigClusterResourceConflictPolicyEnum `json:"clusterResourceConflictPolicy"`
	ClusterResourceRestoreScope   *ClusterResourceRestoreScope                    `json:"clusterResourceRestoreScope"`
	NamespacedResourceRestoreMode *RestoreConfigNamespacedResourceRestoreModeEnum `json:"namespacedResourceRestoreMode"`
	SelectedApplications          *NamespacedNames                                `json:"selectedApplications"`
	SelectedNamespaces            *Namespaces                                     `json:"selectedNamespaces"`
	SubstitutionRules             []SubstitutionRule                              `json:"substitutionRules"`
	VolumeDataRestorePolicy       *RestoreConfigVolumeDataRestorePolicyEnum       `json:"volumeDataRestorePolicy"`
}
