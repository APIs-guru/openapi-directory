package shared



type StructuredQuery struct {
    EndAt *Cursor `json:"endAt,omitempty"`
    From []CollectionSelector `json:"from,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    OrderBy []Order `json:"orderBy,omitempty"`
    Select *Projection `json:"select,omitempty"`
    StartAt *Cursor `json:"startAt,omitempty"`
    Where *Filter `json:"where,omitempty"`
    
}

