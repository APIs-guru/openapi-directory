package shared

type PlayerEvent struct {
	DefinitionID       *string `json:"definitionId,omitempty"`
	FormattedNumEvents *string `json:"formattedNumEvents,omitempty"`
	Kind               *string `json:"kind,omitempty"`
	NumEvents          *string `json:"numEvents,omitempty"`
	PlayerID           *string `json:"playerId,omitempty"`
}
