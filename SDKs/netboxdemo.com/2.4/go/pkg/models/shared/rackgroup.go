package shared



type RackGroup struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Site NestedSite `json:"site"`
    Slug string `json:"slug"`
    
}

