package shared

type User struct {
	DeletedUser map[string]interface{} `json:"deletedUser,omitempty"`
	KnownUser   *KnownUser             `json:"knownUser,omitempty"`
	UnknownUser map[string]interface{} `json:"unknownUser,omitempty"`
}
