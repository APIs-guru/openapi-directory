package shared



type MappingSettings struct {
    Map map[string]string `json:"map"`
    Remove []string `json:"remove"`
    Values map[string]string `json:"values"`
    
}

