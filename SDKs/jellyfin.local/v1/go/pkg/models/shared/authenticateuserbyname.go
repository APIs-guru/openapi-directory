package shared

type AuthenticateUserByName struct {
	Password *string `json:"Password"`
	Pw       *string `json:"Pw"`
	Username *string `json:"Username"`
}
