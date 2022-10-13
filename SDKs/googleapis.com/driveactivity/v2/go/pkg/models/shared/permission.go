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

type Permission struct {
	AllowDiscovery *bool                  `json:"allowDiscovery"`
	Anyone         map[string]interface{} `json:"anyone"`
	Domain         *Domain                `json:"domain"`
	Group          *Group                 `json:"group"`
	Role           *PermissionRoleEnum    `json:"role"`
	User           *User                  `json:"user"`
}
