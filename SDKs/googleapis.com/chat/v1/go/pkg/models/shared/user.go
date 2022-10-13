package shared

type UserTypeEnum string

const (
	UserTypeEnumTypeUnspecified UserTypeEnum = "TYPE_UNSPECIFIED"
	UserTypeEnumHuman           UserTypeEnum = "HUMAN"
	UserTypeEnumBot             UserTypeEnum = "BOT"
)

type User struct {
	DisplayName *string       `json:"displayName"`
	DomainID    *string       `json:"domainId"`
	IsAnonymous *bool         `json:"isAnonymous"`
	Name        *string       `json:"name"`
	Type        *UserTypeEnum `json:"type"`
}
