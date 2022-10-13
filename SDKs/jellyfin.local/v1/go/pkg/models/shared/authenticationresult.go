package shared

type AuthenticationResult struct {
	AccessToken *string      `json:"AccessToken"`
	ServerID    *string      `json:"ServerId"`
	SessionInfo *SessionInfo `json:"SessionInfo"`
	User        *UserDto     `json:"User"`
}
