package shared

type ServiceSettingsUpdateModel struct {
	BookAheadUnit  *int32 `json:"bookAheadUnit"`
	BookAheadValue *int32 `json:"bookAheadValue"`
	BookInAdvance  *int32 `json:"bookInAdvance"`
}
