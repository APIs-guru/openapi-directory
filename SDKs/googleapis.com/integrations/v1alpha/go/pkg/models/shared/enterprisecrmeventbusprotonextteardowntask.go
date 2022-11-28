package shared

// EnterpriseCrmEventbusProtoNextTeardownTask
// The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).
type EnterpriseCrmEventbusProtoNextTeardownTask struct {
	Name *string `json:"name,omitempty"`
}
