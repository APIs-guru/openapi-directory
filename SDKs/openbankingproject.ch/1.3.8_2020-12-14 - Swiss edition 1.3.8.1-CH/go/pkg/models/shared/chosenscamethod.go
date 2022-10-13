package shared

type ChosenScaMethod struct {
	AuthenticationMethodID string                 `json:"authenticationMethodId"`
	AuthenticationType     AuthenticationTypeEnum `json:"authenticationType"`
	AuthenticationVersion  *string                `json:"authenticationVersion"`
	Explanation            *string                `json:"explanation"`
	Name                   *string                `json:"name"`
}
