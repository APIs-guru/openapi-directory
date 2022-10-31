package shared



type Create struct {
    Copy *Copy `json:"copy,omitempty"`
    New map[string]interface{} `json:"new,omitempty"`
    Upload map[string]interface{} `json:"upload,omitempty"`
    
}

