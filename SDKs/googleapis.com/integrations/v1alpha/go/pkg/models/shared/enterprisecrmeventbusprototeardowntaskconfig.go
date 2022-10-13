package shared

type EnterpriseCrmEventbusProtoTeardownTaskConfig struct {
	CreatorEmail                        *string                                       `json:"creatorEmail"`
	Name                                *string                                       `json:"name"`
	NextTeardownTask                    *EnterpriseCrmEventbusProtoNextTeardownTask   `json:"nextTeardownTask"`
	Parameters                          *EnterpriseCrmEventbusProtoEventParameters    `json:"parameters"`
	Properties                          *EnterpriseCrmEventbusProtoEventBusProperties `json:"properties"`
	TeardownTaskImplementationClassName *string                                       `json:"teardownTaskImplementationClassName"`
}
