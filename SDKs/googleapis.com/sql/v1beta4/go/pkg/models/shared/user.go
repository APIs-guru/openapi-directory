package shared

type UserDualPasswordTypeEnum string

const (
	UserDualPasswordTypeEnumDualPasswordTypeUnspecified UserDualPasswordTypeEnum = "DUAL_PASSWORD_TYPE_UNSPECIFIED"
	UserDualPasswordTypeEnumNoModifyDualPassword        UserDualPasswordTypeEnum = "NO_MODIFY_DUAL_PASSWORD"
	UserDualPasswordTypeEnumNoDualPassword              UserDualPasswordTypeEnum = "NO_DUAL_PASSWORD"
	UserDualPasswordTypeEnumDualPassword                UserDualPasswordTypeEnum = "DUAL_PASSWORD"
)

type UserTypeEnum string

const (
	UserTypeEnumBuiltIn                UserTypeEnum = "BUILT_IN"
	UserTypeEnumCloudIamUser           UserTypeEnum = "CLOUD_IAM_USER"
	UserTypeEnumCloudIamServiceAccount UserTypeEnum = "CLOUD_IAM_SERVICE_ACCOUNT"
)

// User
// A Cloud SQL user resource.
type User struct {
	DualPasswordType     *UserDualPasswordTypeEnum     `json:"dualPasswordType,omitempty"`
	Etag                 *string                       `json:"etag,omitempty"`
	Host                 *string                       `json:"host,omitempty"`
	Instance             *string                       `json:"instance,omitempty"`
	Kind                 *string                       `json:"kind,omitempty"`
	Name                 *string                       `json:"name,omitempty"`
	Password             *string                       `json:"password,omitempty"`
	PasswordPolicy       *UserPasswordValidationPolicy `json:"passwordPolicy,omitempty"`
	Project              *string                       `json:"project,omitempty"`
	SqlserverUserDetails *SQLServerUserDetails         `json:"sqlserverUserDetails,omitempty"`
	Type                 *UserTypeEnum                 `json:"type,omitempty"`
}
