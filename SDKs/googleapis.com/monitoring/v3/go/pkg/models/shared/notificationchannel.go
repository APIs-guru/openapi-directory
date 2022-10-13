package shared

type NotificationChannelVerificationStatusEnum string

const (
	NotificationChannelVerificationStatusEnumVerificationStatusUnspecified NotificationChannelVerificationStatusEnum = "VERIFICATION_STATUS_UNSPECIFIED"
	NotificationChannelVerificationStatusEnumUnverified                    NotificationChannelVerificationStatusEnum = "UNVERIFIED"
	NotificationChannelVerificationStatusEnumVerified                      NotificationChannelVerificationStatusEnum = "VERIFIED"
)

type NotificationChannel struct {
	CreationRecord     *MutationRecord                            `json:"creationRecord"`
	Description        *string                                    `json:"description"`
	DisplayName        *string                                    `json:"displayName"`
	Enabled            *bool                                      `json:"enabled"`
	Labels             map[string]string                          `json:"labels"`
	MutationRecords    []MutationRecord                           `json:"mutationRecords"`
	Name               *string                                    `json:"name"`
	Type               *string                                    `json:"type"`
	UserLabels         map[string]string                          `json:"userLabels"`
	VerificationStatus *NotificationChannelVerificationStatusEnum `json:"verificationStatus"`
}
