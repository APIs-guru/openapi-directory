package shared




type UserTypeEnum string

const (
    UserTypeEnumTypeUnspecified UserTypeEnum = "TYPE_UNSPECIFIED"
UserTypeEnumHuman UserTypeEnum = "HUMAN"
UserTypeEnumBot UserTypeEnum = "BOT"
)


type User struct {
    DisplayName *string `json:"displayName,omitempty"`
    DomainID *string `json:"domainId,omitempty"`
    IsAnonymous *bool `json:"isAnonymous,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *UserTypeEnum `json:"type,omitempty"`
    
}

