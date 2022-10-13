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

type User struct {
	DualPasswordType     *UserDualPasswordTypeEnum     `json:"dualPasswordType"`
	Etag                 *string                       `json:"etag"`
	Host                 *string                       `json:"host"`
	Instance             *string                       `json:"instance"`
	Kind                 *string                       `json:"kind"`
	Name                 *string                       `json:"name"`
	Password             *string                       `json:"password"`
	PasswordPolicy       *UserPasswordValidationPolicy `json:"passwordPolicy"`
	Project              *string                       `json:"project"`
	SqlserverUserDetails *SQLServerUserDetails         `json:"sqlserverUserDetails"`
	Type                 *UserTypeEnum                 `json:"type"`
}
