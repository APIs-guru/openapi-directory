package shared

import (
	"time"
)

// PersonalAccessTokenInput
// A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
type PersonalAccessTokenInput struct {
	Label *string `json:"label,omitempty"`
}

// PersonalAccessToken
// A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
type PersonalAccessToken struct {
	Created *time.Time `json:"created,omitempty"`
	Expiry  *time.Time `json:"expiry,omitempty"`
	ID      *int64     `json:"id,omitempty"`
	Label   *string    `json:"label,omitempty"`
	Scopes  *string    `json:"scopes,omitempty"`
	Token   *string    `json:"token,omitempty"`
}
