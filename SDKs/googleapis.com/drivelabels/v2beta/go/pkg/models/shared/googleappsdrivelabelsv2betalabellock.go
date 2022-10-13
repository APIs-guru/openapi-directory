package shared

type GoogleAppsDriveLabelsV2betaLabelLockStateEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumStateUnspecified GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "STATE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumActive           GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "ACTIVE"
	GoogleAppsDriveLabelsV2betaLabelLockStateEnumDeleting         GoogleAppsDriveLabelsV2betaLabelLockStateEnum = "DELETING"
)

type GoogleAppsDriveLabelsV2betaLabelLock struct {
	Capabilities *GoogleAppsDriveLabelsV2betaLabelLockCapabilities `json:"capabilities"`
	ChoiceID     *string                                           `json:"choiceId"`
	CreateTime   *string                                           `json:"createTime"`
	Creator      *GoogleAppsDriveLabelsV2betaUserInfo              `json:"creator"`
	DeleteTime   *string                                           `json:"deleteTime"`
	FieldID      *string                                           `json:"fieldId"`
	Name         *string                                           `json:"name"`
	PolicyURI    *string                                           `json:"policyUri"`
	State        *GoogleAppsDriveLabelsV2betaLabelLockStateEnum    `json:"state"`
}
