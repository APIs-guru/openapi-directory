package shared

type User struct {
	DeletedUser map[string]interface{} `json:"deletedUser"`
	KnownUser   *KnownUser             `json:"knownUser"`
	UnknownUser map[string]interface{} `json:"unknownUser"`
}
