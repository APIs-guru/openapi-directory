package shared



type CategoryFields struct {
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentID *int32 `json:"parent_id,omitempty"`
    Permalink *string `json:"permalink,omitempty"`
    
}

