package shared

type GoogleAppsDriveLabelsV2betaLabelLockStateEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumStateUnspecified GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "STATE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumActive           GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "ACTIVE"
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumDeleting         GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "DELETING"
)

type GoogleAppsDriveLabelsV2betaLabelLock struct {
	Capabilities *GoogleAppsDriveLabelsV2betaLabelLockCapabilities `json:"capabilities,omitempty"`
	ChoiceID     *string                                           `json:"choiceId,omitempty"`
	CreateTime   *string                                           `json:"createTime,omitempty"`
	Creator      *GoogleAppsDriveLabelsV2betaUserInfo              `json:"creator,omitempty"`
	DeleteTime   *string                                           `json:"deleteTime,omitempty"`
	FieldID      *string                                           `json:"fieldId,omitempty"`
	Name         *string                                           `json:"name,omitempty"`
	PolicyURI    *string                                           `json:"policyUri,omitempty"`
	State        *GoogleAppsDriveLabelsV2betaLabelLockStateEnum    `json:"state,omitempty"`
}
