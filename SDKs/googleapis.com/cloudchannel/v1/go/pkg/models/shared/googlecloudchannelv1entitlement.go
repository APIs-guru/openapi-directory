package shared

type GoogleCloudChannelV1EntitlementProvisioningStateEnum string

const (
	GoogleCloudChannelV1EntitlementProvisioningStateEnumProvisioningStateUnspecified GoogleCloudChannelV1EntitlementProvisioningStateEnum = "PROVISIONING_STATE_UNSPECIFIED"
	GoogleCloudChannelV1EntitlementProvisioningStateEnumActive                       GoogleCloudChannelV1EntitlementProvisioningStateEnum = "ACTIVE"
	GoogleCloudChannelV1EntitlementProvisioningStateEnumSuspended                    GoogleCloudChannelV1EntitlementProvisioningStateEnum = "SUSPENDED"
)

type GoogleCloudChannelV1EntitlementSuspensionReasonsEnum string

const (
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumSuspensionReasonUnspecified GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "SUSPENSION_REASON_UNSPECIFIED"
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumResellerInitiated           GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "RESELLER_INITIATED"
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumTrialEnded                  GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "TRIAL_ENDED"
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumRenewalWithTypeCancel       GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "RENEWAL_WITH_TYPE_CANCEL"
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumPendingTosAcceptance        GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "PENDING_TOS_ACCEPTANCE"
	GoogleCloudChannelV1EntitlementSuspensionReasonsEnumOther                       GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = "OTHER"
)

type GoogleCloudChannelV1Entitlement struct {
	AssociationInfo    *GoogleCloudChannelV1AssociationInfo                   `json:"associationInfo,omitempty"`
	CommitmentSettings *GoogleCloudChannelV1CommitmentSettings                `json:"commitmentSettings,omitempty"`
	CreateTime         *string                                                `json:"createTime,omitempty"`
	Name               *string                                                `json:"name,omitempty"`
	Offer              *string                                                `json:"offer,omitempty"`
	Parameters         []GoogleCloudChannelV1Parameter                        `json:"parameters,omitempty"`
	ProvisionedService *GoogleCloudChannelV1ProvisionedService                `json:"provisionedService,omitempty"`
	ProvisioningState  *GoogleCloudChannelV1EntitlementProvisioningStateEnum  `json:"provisioningState,omitempty"`
	PurchaseOrderID    *string                                                `json:"purchaseOrderId,omitempty"`
	SuspensionReasons  []GoogleCloudChannelV1EntitlementSuspensionReasonsEnum `json:"suspensionReasons,omitempty"`
	TrialSettings      *GoogleCloudChannelV1TrialSettings                     `json:"trialSettings,omitempty"`
	UpdateTime         *string                                                `json:"updateTime,omitempty"`
}
