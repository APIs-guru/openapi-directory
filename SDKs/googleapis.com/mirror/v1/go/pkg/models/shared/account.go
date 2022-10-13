package shared

type Account struct {
	AuthTokens []AuthToken `json:"authTokens"`
	Features   []string    `json:"features"`
	Password   *string     `json:"password"`
	UserData   []UserData  `json:"userData"`
}
