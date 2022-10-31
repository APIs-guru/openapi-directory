package shared



type AnalyzeEntitiesResponse struct {
    Entities []Entity `json:"entities,omitempty"`
    EntityMentions []EntityMention `json:"entityMentions,omitempty"`
    Relationships []EntityMentionRelationship `json:"relationships,omitempty"`
    
}

