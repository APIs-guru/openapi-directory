package shared



type TimestampResMember struct {
    Invited *string `json:"invited,omitempty"`
    Joined *string `json:"joined,omitempty"`
    Left *string `json:"left,omitempty"`
    
}

