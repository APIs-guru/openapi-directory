package shared

type SpaceTypeEnum string

const (
	SpaceTypeEnumTypeUnspecified SpaceTypeEnum = "TYPE_UNSPECIFIED"
	SpaceTypeEnumRoom            SpaceTypeEnum = "ROOM"
	SpaceTypeEnumDm              SpaceTypeEnum = "DM"
)

type Space struct {
	DisplayName     *string        `json:"displayName"`
	Name            *string        `json:"name"`
	SingleUserBotDm *bool          `json:"singleUserBotDm"`
	SpaceDetails    *SpaceDetails  `json:"spaceDetails"`
	Threaded        *bool          `json:"threaded"`
	Type            *SpaceTypeEnum `json:"type"`
}
