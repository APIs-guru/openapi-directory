package shared

type AuthenticationResult struct {
	AccessToken *string      `json:"AccessToken,omitempty"`
	ServerID    *string      `json:"ServerId,omitempty"`
	SessionInfo *SessionInfo `json:"SessionInfo,omitempty"`
	User        *UserDto     `json:"User,omitempty"`
}
