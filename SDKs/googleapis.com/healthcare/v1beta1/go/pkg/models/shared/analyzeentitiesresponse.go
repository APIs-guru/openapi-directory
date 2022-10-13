package shared

type AnalyzeEntitiesResponse struct {
	Entities       []Entity                    `json:"entities"`
	EntityMentions []EntityMention             `json:"entityMentions"`
	Relationships  []EntityMentionRelationship `json:"relationships"`
}
