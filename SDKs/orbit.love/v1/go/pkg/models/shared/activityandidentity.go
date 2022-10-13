package shared

type ActivityAndIdentity struct {
	Activity *interface{} `json:"activity"`
	Identity *Identity    `json:"identity"`
}
