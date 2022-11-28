package shared

// GoogleAppsScriptTypeUser
// A simple user profile resource.
type GoogleAppsScriptTypeUser struct {
	Domain   *string `json:"domain,omitempty"`
	Email    *string `json:"email,omitempty"`
	Name     *string `json:"name,omitempty"`
	PhotoURL *string `json:"photoUrl,omitempty"`
}
