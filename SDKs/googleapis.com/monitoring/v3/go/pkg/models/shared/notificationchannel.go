package shared

type NotificationChannelVerificationStatusEnum string

const (
	NotificationChannelVerificationStatusEnumVerificationStatusUnspecified NotificationChannelVerificationStatusEnum = "VERIFICATION_STATUS_UNSPECIFIED"
	NotificationChannelVerificationStatusEnumUnverified                    NotificationChannelVerificationStatusEnum = "UNVERIFIED"
	NotificationChannelVerificationStatusEnumVerified                      NotificationChannelVerificationStatusEnum = "VERIFIED"
)

// NotificationChannel
// A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
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
