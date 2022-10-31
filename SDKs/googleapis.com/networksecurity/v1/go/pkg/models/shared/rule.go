package shared



type Rule struct {
    Destinations []Destination `json:"destinations,omitempty"`
    Sources []Source `json:"sources,omitempty"`
    
}

