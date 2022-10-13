package shared

type GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum string

const (
	GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnumOwnershipPrivilegeUnspecified GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnumDeviceAdministrator           GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_ADMINISTRATOR"
	GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnumProfileOwner                  GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum = "PROFILE_OWNER"
	GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnumDeviceOwner                   GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_OWNER"
)

type GoogleAppsCloudidentityDevicesV1AndroidAttributes struct {
	EnabledUnknownSources *bool                                                                    `json:"enabledUnknownSources"`
	OwnerProfileAccount   *bool                                                                    `json:"ownerProfileAccount"`
	OwnershipPrivilege    *GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum `json:"ownershipPrivilege"`
	SupportsWorkProfile   *bool                                                                    `json:"supportsWorkProfile"`
}
