package shared




type SpaceTypeEnum string

const (
    SpaceTypeEnumTypeUnspecified SpaceTypeEnum = "TYPE_UNSPECIFIED"
SpaceTypeEnumRoom SpaceTypeEnum = "ROOM"
SpaceTypeEnumDm SpaceTypeEnum = "DM"
)


type Space struct {
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    SingleUserBotDm *bool `json:"singleUserBotDm,omitempty"`
    SpaceDetails *SpaceDetails `json:"spaceDetails,omitempty"`
    Threaded *bool `json:"threaded,omitempty"`
    Type *SpaceTypeEnum `json:"type,omitempty"`
    
}

