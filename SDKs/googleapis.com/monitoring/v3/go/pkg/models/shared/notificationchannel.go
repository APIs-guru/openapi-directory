package shared

type NotificationChannelVerificationStatusEnum string

const (
	NotificationChannelVerificationStatusEnumVerificationStatusUnspecified NotificationChannelVerificationStatusEnum = "VERIFICATION_STATUS_UNSPECIFIED"
	NotificationChannelVerificationStatusEnumUnverified                    NotificationChannelVerificationStatusEnum = "UNVERIFIED"
	NotificationChannelVerificationStatusEnumVerified                      NotificationChannelVerificationStatusEnum = "VERIFIED"
)

type NotificationChannel struct {
	CreationRecord     *MutationRecord                            `json:"creationRecord,omitempty"`
	Description        *string                                    `json:"description,omitempty"`
	DisplayName        *string                                    `json:"displayName,omitempty"`
	Enabled            *bool                                      `json:"enabled,omitempty"`
	Labels             map[string]string                          `json:"labels,omitempty"`
	MutationRecords    []MutationRecord                           `json:"mutationRecords,omitempty"`
	Name               *string                                    `json:"name,omitempty"`
	Type               *string                                    `json:"type,omitempty"`
	UserLabels         map[string]string                          `json:"userLabels,omitempty"`
	VerificationStatus *NotificationChannelVerificationStatusEnum `json:"verificationStatus,omitempty"`
}
