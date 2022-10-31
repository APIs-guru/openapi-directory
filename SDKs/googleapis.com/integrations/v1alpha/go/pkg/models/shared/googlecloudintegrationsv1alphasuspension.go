package shared




type GoogleCloudIntegrationsV1alphaSuspensionStateEnum string

const (
    GoogleCloudIntegrationsV1alphaSuspensionStateEnumResolutionStateUnspecified GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "RESOLUTION_STATE_UNSPECIFIED"
GoogleCloudIntegrationsV1alphaSuspensionStateEnumPending GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "PENDING"
GoogleCloudIntegrationsV1alphaSuspensionStateEnumRejected GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "REJECTED"
GoogleCloudIntegrationsV1alphaSuspensionStateEnumLifted GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "LIFTED"
)


type GoogleCloudIntegrationsV1alphaSuspension struct {
    ApprovalConfig *GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig `json:"approvalConfig,omitempty"`
    Audit *GoogleCloudIntegrationsV1alphaSuspensionAudit `json:"audit,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EventExecutionInfoID *string `json:"eventExecutionInfoId,omitempty"`
    Integration *string `json:"integration,omitempty"`
    LastModifyTime *string `json:"lastModifyTime,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudIntegrationsV1alphaSuspensionStateEnum `json:"state,omitempty"`
    SuspensionConfig *EnterpriseCrmEventbusProtoSuspensionConfig `json:"suspensionConfig,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    
}

