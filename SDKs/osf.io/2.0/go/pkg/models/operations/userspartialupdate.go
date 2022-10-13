package operations

import (
	"time"
)

type UsersPartialUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type UsersPartialUpdateRequestBodyAttributesAttributes struct {
	Active         bool      `json:"active"`
	DateRegistered time.Time `json:"date_registered"`
	FamilyName     *string   `json:"family_name"`
	FullName       string    `json:"full_name"`
	GivenName      *string   `json:"given_name"`
	Locale         *string   `json:"locale"`
	MiddleNames    *string   `json:"middle_names"`
	Suffix         *string   `json:"suffix"`
	Timezone       *string   `json:"timezone"`
}

type UsersPartialUpdateRequestBodyLinksLinks struct {
	HTML         *string `json:"html"`
	ProfileImage *string `json:"profile_image"`
}

type UsersPartialUpdateRequestBodyRelationshipsRelationships struct {
	Institutions *string `json:"institutions"`
	Nodes        *string `json:"nodes"`
}

type UsersPartialUpdateRequestBodyUser struct {
	Attributes    UsersPartialUpdateRequestBodyAttributesAttributes       `json:"attributes"`
	ID            string                                                  `json:"id"`
	Links         UsersPartialUpdateRequestBodyLinksLinks                 `json:"links"`
	Relationships UsersPartialUpdateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                  `json:"type"`
}

type UsersPartialUpdateRequest struct {
	PathParams UsersPartialUpdatePathParams
	Request    UsersPartialUpdateRequestBodyUser `request:"mediaType=application/json"`
}

type UsersPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
