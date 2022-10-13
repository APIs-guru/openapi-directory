package shared

type ApplicationVerifyResponse struct {
	AlternatePlayerID *string `json:"alternate_player_id"`
	Kind              *string `json:"kind"`
	PlayerID          *string `json:"player_id"`
}
