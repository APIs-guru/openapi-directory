package shared

type ContactGroupGroupTypeEnum string

const (
	ContactGroupGroupTypeEnumGroupTypeUnspecified ContactGroupGroupTypeEnum = "GROUP_TYPE_UNSPECIFIED"
	ContactGroupGroupTypeEnumUserContactGroup     ContactGroupGroupTypeEnum = "USER_CONTACT_GROUP"
	ContactGroupGroupTypeEnumSystemContactGroup   ContactGroupGroupTypeEnum = "SYSTEM_CONTACT_GROUP"
)

type ContactGroup struct {
	ClientData          []GroupClientData          `json:"clientData"`
	Etag                *string                    `json:"etag"`
	FormattedName       *string                    `json:"formattedName"`
	GroupType           *ContactGroupGroupTypeEnum `json:"groupType"`
	MemberCount         *int32                     `json:"memberCount"`
	MemberResourceNames []string                   `json:"memberResourceNames"`
	Metadata            *ContactGroupMetadata      `json:"metadata"`
	Name                *string                    `json:"name"`
	ResourceName        *string                    `json:"resourceName"`
}
