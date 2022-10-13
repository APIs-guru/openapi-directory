package shared

type MemberAndIdentity struct {
	Identity *Identity `json:"identity"`
	Member   *Member   `json:"member"`
}
