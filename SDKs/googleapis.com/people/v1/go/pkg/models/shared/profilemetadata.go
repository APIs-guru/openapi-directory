package shared

type ProfileMetadataObjectTypeEnum string

const (
	ProfileMetadataObjectTypeEnumObjectTypeUnspecified ProfileMetadataObjectTypeEnum = "OBJECT_TYPE_UNSPECIFIED"
	ProfileMetadataObjectTypeEnumPerson                ProfileMetadataObjectTypeEnum = "PERSON"
	ProfileMetadataObjectTypeEnumPage                  ProfileMetadataObjectTypeEnum = "PAGE"
)

type ProfileMetadataUserTypesEnum string

const (
	ProfileMetadataUserTypesEnumUserTypeUnknown ProfileMetadataUserTypesEnum = "USER_TYPE_UNKNOWN"
	ProfileMetadataUserTypesEnumGoogleUser      ProfileMetadataUserTypesEnum = "GOOGLE_USER"
	ProfileMetadataUserTypesEnumGplusUser       ProfileMetadataUserTypesEnum = "GPLUS_USER"
	ProfileMetadataUserTypesEnumGoogleAppsUser  ProfileMetadataUserTypesEnum = "GOOGLE_APPS_USER"
)

type ProfileMetadata struct {
	ObjectType *ProfileMetadataObjectTypeEnum `json:"objectType"`
	UserTypes  []ProfileMetadataUserTypesEnum `json:"userTypes"`
}
