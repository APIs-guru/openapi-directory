package shared



type BucketAccessControls struct {
    Items []BucketAccessControl `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

