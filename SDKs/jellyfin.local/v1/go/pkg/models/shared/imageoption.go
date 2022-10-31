package shared



type ImageOption struct {
    Limit *int32 `json:"Limit,omitempty"`
    MinWidth *int32 `json:"MinWidth,omitempty"`
    Type *ImageTypeEnum `json:"Type,omitempty"`
    
}

