package shared



type EnterpriseCrmEventbusProtoTeardownTaskConfig struct {
    CreatorEmail *string `json:"creatorEmail,omitempty"`
    Name *string `json:"name,omitempty"`
    NextTeardownTask *EnterpriseCrmEventbusProtoNextTeardownTask `json:"nextTeardownTask,omitempty"`
    Parameters *EnterpriseCrmEventbusProtoEventParameters `json:"parameters,omitempty"`
    Properties *EnterpriseCrmEventbusProtoEventBusProperties `json:"properties,omitempty"`
    TeardownTaskImplementationClassName *string `json:"teardownTaskImplementationClassName,omitempty"`
    
}

