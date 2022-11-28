package shared

// EnterpriseCrmEventbusProtoTaskMetadataAdmin
// Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.
type EnterpriseCrmEventbusProtoTaskMetadataAdmin struct {
	GoogleGroupEmail *string `json:"googleGroupEmail,omitempty"`
	UserEmail        *string `json:"userEmail,omitempty"`
}
