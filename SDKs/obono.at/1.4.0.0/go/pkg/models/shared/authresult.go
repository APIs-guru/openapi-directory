package shared

type AuthResult struct {
	AccessToken         *string `json:"accessToken"`
	RegistrierkasseUUID *string `json:"registrierkasseUuid"`
}
