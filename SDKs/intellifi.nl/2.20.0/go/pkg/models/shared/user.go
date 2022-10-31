package shared

type User struct {
	Email       *string `json:"email,omitempty"`
	FirstName   *string `json:"first_name,omitempty"`
	ID          *string `json:"id,omitempty"`
	IsAdmin     *bool   `json:"is_admin,omitempty"`
	IsLocked    *bool   `json:"is_locked,omitempty"`
	LastName    *string `json:"last_name,omitempty"`
	Password    *string `json:"password,omitempty"`
	TimeCreated *string `json:"time_created,omitempty"`
	TimeUpdated *string `json:"time_updated,omitempty"`
	URL         *string `json:"url,omitempty"`
}
