package shared

type PermissionRoleEnum string

const (
	PermissionRoleEnumRoleUnspecified PermissionRoleEnum = "ROLE_UNSPECIFIED"
	PermissionRoleEnumOwner           PermissionRoleEnum = "OWNER"
	PermissionRoleEnumOrganizer       PermissionRoleEnum = "ORGANIZER"
	PermissionRoleEnumFileOrganizer   PermissionRoleEnum = "FILE_ORGANIZER"
	PermissionRoleEnumEditor          PermissionRoleEnum = "EDITOR"
	PermissionRoleEnumCommenter       PermissionRoleEnum = "COMMENTER"
	PermissionRoleEnumViewer          PermissionRoleEnum = "VIEWER"
	PermissionRoleEnumPublishedViewer PermissionRoleEnum = "PUBLISHED_VIEWER"
)

// Permission
// The permission setting of an object.
type Permission struct {
	AllowDiscovery *bool                  `json:"allowDiscovery,omitempty"`
	Anyone         map[string]interface{} `json:"anyone,omitempty"`
	Domain         *Domain                `json:"domain,omitempty"`
	Group          *Group                 `json:"group,omitempty"`
	Role           *PermissionRoleEnum    `json:"role,omitempty"`
	User           *User                  `json:"user,omitempty"`
}
