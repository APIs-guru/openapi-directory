package shared

type AndroidAttributesOwnershipPrivilegeEnum string

const (
	AndroidAttributesOwnershipPrivilegeEnumOwnershipPrivilegeUnspecified AndroidAttributesOwnershipPrivilegeEnum = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
	AndroidAttributesOwnershipPrivilegeEnumDeviceAdministrator           AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_ADMINISTRATOR"
	AndroidAttributesOwnershipPrivilegeEnumProfileOwner                  AndroidAttributesOwnershipPrivilegeEnum = "PROFILE_OWNER"
	AndroidAttributesOwnershipPrivilegeEnumDeviceOwner                   AndroidAttributesOwnershipPrivilegeEnum = "DEVICE_OWNER"
)

type AndroidAttributes struct {
	EnabledUnknownSources *bool                                    `json:"enabledUnknownSources,omitempty"`
	OwnerProfileAccount   *bool                                    `json:"ownerProfileAccount,omitempty"`
	OwnershipPrivilege    *AndroidAttributesOwnershipPrivilegeEnum `json:"ownershipPrivilege,omitempty"`
	SupportsWorkProfile   *bool                                    `json:"supportsWorkProfile,omitempty"`
}
