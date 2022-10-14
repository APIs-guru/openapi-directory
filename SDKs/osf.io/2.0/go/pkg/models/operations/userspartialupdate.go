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
	FamilyName     *string   `json:"family_name,omitempty"`
	FullName       string    `json:"full_name"`
	GivenName      *string   `json:"given_name,omitempty"`
	Locale         *string   `json:"locale,omitempty"`
	MiddleNames    *string   `json:"middle_names,omitempty"`
	Suffix         *string   `json:"suffix,omitempty"`
	Timezone       *string   `json:"timezone,omitempty"`
}

type UsersPartialUpdateRequestBodyLinksLinks struct {
	HTML         *string `json:"html,omitempty"`
	ProfileImage *string `json:"profile_image,omitempty"`
}

type UsersPartialUpdateRequestBodyRelationshipsRelationships struct {
	Institutions *string `json:"institutions,omitempty"`
	Nodes        *string `json:"nodes,omitempty"`
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
