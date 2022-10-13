package shared

type DiskRequest struct {
	AuthorizedKeys  []string               `json:"authorized_keys"`
	AuthorizedUsers []string               `json:"authorized_users"`
	Filesystem      *FilesystemEnum        `json:"filesystem"`
	Image           *string                `json:"image"`
	Label           string                 `json:"label"`
	RootPass        *string                `json:"root_pass"`
	Size            int64                  `json:"size"`
	StackscriptData map[string]interface{} `json:"stackscript_data"`
	StackscriptID   *int64                 `json:"stackscript_id"`
}
