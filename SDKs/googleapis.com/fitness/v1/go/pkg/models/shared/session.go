package shared

type Session struct {
	ActiveTimeMillis   *string      `json:"activeTimeMillis,omitempty"`
	ActivityType       *int32       `json:"activityType,omitempty"`
	Application        *Application `json:"application,omitempty"`
	Description        *string      `json:"description,omitempty"`
	EndTimeMillis      *string      `json:"endTimeMillis,omitempty"`
	ID                 *string      `json:"id,omitempty"`
	ModifiedTimeMillis *string      `json:"modifiedTimeMillis,omitempty"`
	Name               *string      `json:"name,omitempty"`
	StartTimeMillis    *string      `json:"startTimeMillis,omitempty"`
}
