package shared



type ApnsConfig struct {
    FcmOptions *ApnsFcmOptions `json:"fcmOptions,omitempty"`
    Headers map[string]string `json:"headers,omitempty"`
    Payload map[string]interface{} `json:"payload,omitempty"`
    
}

