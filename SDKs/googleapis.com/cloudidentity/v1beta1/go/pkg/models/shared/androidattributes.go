package shared

type AndroidAttributesOwnershipPrivilegeEnum string

const (
	AndroidAttributesOwnershipPrivilegeEnumOwnershipPrivilegeUnspecified AndroidAttributesOwnershipPrivilegeEnum = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
	AndroidAttributesOwnershipPrivilegeEnumDeviceAdministrator           AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_ADMINISTRATOR"
	AndroidAttributesOwnershipPrivilegeEnumProfileOwner                  AndroidAttributesOwnershipPrivilegeEnum = "PROFILE_OWNER"
	AndroidAttributesOwnershipPrivilegeEnumDeviceOwner                   AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_OWNER"
)

type AndroidAttributes struct {
	EnabledUnknownSources *bool                                    `json:"enabledUnknownSources"`
	OwnerProfileAccount   *bool                                    `json:"ownerProfileAccount"`
	OwnershipPrivilege    *AndroidAttributesOwnershipPrivilegeEnum `json:"ownershipPrivilege"`
	SupportsWorkProfile   *bool                                    `json:"supportsWorkProfile"`
}
