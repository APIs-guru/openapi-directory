package shared




type ContactGroupGroupTypeEnum string

const (
    ContactGroupGroupTypeEnumGroupTypeUnspecified ContactGroupGroupTypeEnum = "GROUP_TYPE_UNSPECIFIED"
ContactGroupGroupTypeEnumUserContactGroup ContactGroupGroupTypeEnum = "USER_CONTACT_GROUP"
ContactGroupGroupTypeEnumSystemContactGroup ContactGroupGroupTypeEnum = "SYSTEM_CONTACT_GROUP"
)


type ContactGroup struct {
    ClientData []GroupClientData `json:"clientData,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FormattedName *string `json:"formattedName,omitempty"`
    GroupType *ContactGroupGroupTypeEnum `json:"groupType,omitempty"`
    MemberCount *int32 `json:"memberCount,omitempty"`
    MemberResourceNames []string `json:"memberResourceNames,omitempty"`
    Metadata *ContactGroupMetadata `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    
}

