package shared

type MemberAndIdentity struct {
	Identity *Identity `json:"identity,omitempty"`
	Member   *Member   `json:"member,omitempty"`
}
