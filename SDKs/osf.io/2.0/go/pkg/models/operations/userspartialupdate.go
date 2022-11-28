package operations

type UsersPartialUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

// UsersPartialUpdateUserAttributesInput
// The properties of the user entity.
type UsersPartialUpdateUserAttributesInput struct {
	FamilyName  *string `json:"family_name,omitempty"`
	FullName    string  `json:"full_name"`
	GivenName   *string `json:"given_name,omitempty"`
	Locale      *string `json:"locale,omitempty"`
	MiddleNames *string `json:"middle_names,omitempty"`
	Suffix      *string `json:"suffix,omitempty"`
	Timezone    *string `json:"timezone,omitempty"`
}

type UsersPartialUpdateUserInput struct {
	Attributes UsersPartialUpdateUserAttributesInput `json:"attributes"`
}

type UsersPartialUpdateRequest struct {
	PathParams UsersPartialUpdatePathParams
	Request    UsersPartialUpdateUserInput `request:"mediaType=application/json"`
}

type UsersPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
