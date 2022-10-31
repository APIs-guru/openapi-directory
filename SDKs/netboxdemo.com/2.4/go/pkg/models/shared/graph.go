package shared



type GraphType struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type Graph struct {
    ID *int64 `json:"id,omitempty"`
    Link *string `json:"link,omitempty"`
    Name string `json:"name"`
    Source string `json:"source"`
    Type GraphType `json:"type"`
    Weight *int64 `json:"weight,omitempty"`
    
}

