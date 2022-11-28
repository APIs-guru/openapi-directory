package shared

// AnalyzeEntitiesResponse
// Includes recognized entity mentions and relationships between them.
type AnalyzeEntitiesResponse struct {
	Entities       []Entity                    `json:"entities,omitempty"`
	EntityMentions []EntityMention             `json:"entityMentions,omitempty"`
	Relationships  []EntityMentionRelationship `json:"relationships,omitempty"`
}
