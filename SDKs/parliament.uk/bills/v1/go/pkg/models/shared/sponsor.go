package shared



type Sponsor struct {
    Member *Member `json:"member,omitempty"`
    Organisation *Organisation `json:"organisation,omitempty"`
    SortOrder *int32 `json:"sortOrder,omitempty"`
    
}

