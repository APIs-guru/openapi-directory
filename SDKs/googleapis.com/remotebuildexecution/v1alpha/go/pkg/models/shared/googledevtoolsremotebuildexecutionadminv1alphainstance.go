package shared




type GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum string

const (
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnumStateUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum = "STATE_UNSPECIFIED"
GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnumCreating GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum = "CREATING"
GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnumRunning GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum = "RUNNING"
GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnumInactive GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum = "INACTIVE"
)


type GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance struct {
    FeaturePolicy *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy `json:"featurePolicy,omitempty"`
    Location *string `json:"location,omitempty"`
    LoggingEnabled *bool `json:"loggingEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum `json:"state,omitempty"`
    
}

