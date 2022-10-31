package shared



type Image struct {
    GcsURI *string `json:"gcsUri,omitempty"`
    RawBytes *string `json:"rawBytes,omitempty"`
    
}

