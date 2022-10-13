package shared

type Session struct {
	ActiveTimeMillis   *string      `json:"activeTimeMillis"`
	ActivityType       *int32       `json:"activityType"`
	Application        *Application `json:"application"`
	Description        *string      `json:"description"`
	EndTimeMillis      *string      `json:"endTimeMillis"`
	ID                 *string      `json:"id"`
	ModifiedTimeMillis *string      `json:"modifiedTimeMillis"`
	Name               *string      `json:"name"`
	StartTimeMillis    *string      `json:"startTimeMillis"`
}
