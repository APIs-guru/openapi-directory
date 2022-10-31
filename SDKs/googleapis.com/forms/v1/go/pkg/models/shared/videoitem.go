package shared



type VideoItem struct {
    Caption *string `json:"caption,omitempty"`
    Video *Video `json:"video,omitempty"`
    
}

