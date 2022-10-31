package shared



type ActivityAndIdentity struct {
    Activity *interface{} `json:"activity,omitempty"`
    Identity *Identity `json:"identity,omitempty"`
    
}

