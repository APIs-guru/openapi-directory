package shared

type UserTypeEnum string

const (
	UserTypeEnumTypeUnspecified UserTypeEnum = "TYPE_UNSPECIFIED"
	UserTypeEnumHuman           UserTypeEnum = "HUMAN"
	UserTypeEnumBot             UserTypeEnum = "BOT"
)

// UserInput
// A user in Google Chat.
type UserInput struct {
	DomainID *string       `json:"domainId,omitempty"`
	Name     *string       `json:"name,omitempty"`
	Type     *UserTypeEnum `json:"type,omitempty"`
}

// User
// A user in Google Chat.
type User struct {
	DisplayName *string       `json:"displayName,omitempty"`
	DomainID    *string       `json:"domainId,omitempty"`
	IsAnonymous *bool         `json:"isAnonymous,omitempty"`
	Name        *string       `json:"name,omitempty"`
	Type        *UserTypeEnum `json:"type,omitempty"`
}
