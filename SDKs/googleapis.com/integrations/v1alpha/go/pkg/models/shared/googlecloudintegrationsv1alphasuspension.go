package shared

type GoogleCloudIntegrationsV1alphaSuspensionStateEnum string

const (
	GoogleCloudIntegrationsV1alphaSuspensionStateEnumResolutionStateUnspecified GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "RESOLUTION_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaSuspensionStateEnumPending                    GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "PENDING"
	GoogleCloudIntegrationsV1alphaSuspensionStateEnumRejected                   GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "REJECTED"
	GoogleCloudIntegrationsV1alphaSuspensionStateEnumLifted                     GoogleCloudIntegrationsV1alphaSuspensionStateEnum = "LIFTED"
)

type GoogleCloudIntegrationsV1alphaSuspension struct {
	ApprovalConfig       *GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig `json:"approvalConfig"`
	Audit                *GoogleCloudIntegrationsV1alphaSuspensionAudit          `json:"audit"`
	CreateTime           *string                                                 `json:"createTime"`
	EventExecutionInfoID *string                                                 `json:"eventExecutionInfoId"`
	Integration          *string                                                 `json:"integration"`
	LastModifyTime       *string                                                 `json:"lastModifyTime"`
	Name                 *string                                                 `json:"name"`
	State                *GoogleCloudIntegrationsV1alphaSuspensionStateEnum      `json:"state"`
	SuspensionConfig     *EnterpriseCrmEventbusProtoSuspensionConfig             `json:"suspensionConfig"`
	TaskID               *string                                                 `json:"taskId"`
}
