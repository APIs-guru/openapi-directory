package shared

type DiskRequest struct {
	AuthorizedKeys  []string               `json:"authorized_keys,omitempty"`
	AuthorizedUsers []string               `json:"authorized_users,omitempty"`
	Filesystem      *FilesystemEnum        `json:"filesystem,omitempty"`
	Image           *string                `json:"image,omitempty"`
	Label           string                 `json:"label"`
	RootPass        *string                `json:"root_pass,omitempty"`
	Size            int64                  `json:"size"`
	StackscriptData map[string]interface{} `json:"stackscript_data,omitempty"`
	StackscriptID   *int64                 `json:"stackscript_id,omitempty"`
}
