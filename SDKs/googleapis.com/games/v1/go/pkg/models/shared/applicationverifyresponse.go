package shared

type ApplicationVerifyResponse struct {
	AlternatePlayerID *string `json:"alternate_player_id,omitempty"`
	Kind              *string `json:"kind,omitempty"`
	PlayerID          *string `json:"player_id,omitempty"`
}
