package shared

type PlayerEvent struct {
	DefinitionID       *string `json:"definitionId"`
	FormattedNumEvents *string `json:"formattedNumEvents"`
	Kind               *string `json:"kind"`
	NumEvents          *string `json:"numEvents"`
	PlayerID           *string `json:"playerId"`
}
