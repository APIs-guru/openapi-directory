package shared

type ServiceSettingsInputModel struct {
	BookAheadUnit  *int32 `json:"bookAheadUnit,omitempty"`
	BookAheadValue *int32 `json:"bookAheadValue,omitempty"`
	BookInAdvance  *int32 `json:"bookInAdvance,omitempty"`
}
