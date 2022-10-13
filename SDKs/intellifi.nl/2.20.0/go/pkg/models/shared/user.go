package shared

type User struct {
	Email       *string `json:"email"`
	FirstName   *string `json:"first_name"`
	ID          *string `json:"id"`
	IsAdmin     *bool   `json:"is_admin"`
	IsLocked    *bool   `json:"is_locked"`
	LastName    *string `json:"last_name"`
	Password    *string `json:"password"`
	TimeCreated *string `json:"time_created"`
	TimeUpdated *string `json:"time_updated"`
	URL         *string `json:"url"`
}
