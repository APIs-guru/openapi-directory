package shared

type PlayerFriendStatusEnum string

const (
	PlayerFriendStatusEnumFriendStatusUnspecified PlayerFriendStatusEnum = "FRIEND_STATUS_UNSPECIFIED"
	PlayerFriendStatusEnumNoRelationship          PlayerFriendStatusEnum = "NO_RELATIONSHIP"
	PlayerFriendStatusEnumFriend                  PlayerFriendStatusEnum = "FRIEND"
)

type PlayerName struct {
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
}

type Player struct {
	AvatarImageURL     *string                 `json:"avatarImageUrl"`
	BannerURLLandscape *string                 `json:"bannerUrlLandscape"`
	BannerURLPortrait  *string                 `json:"bannerUrlPortrait"`
	DisplayName        *string                 `json:"displayName"`
	ExperienceInfo     *PlayerExperienceInfo   `json:"experienceInfo"`
	FriendStatus       *PlayerFriendStatusEnum `json:"friendStatus"`
	GamePlayerID       *string                 `json:"gamePlayerId"`
	Kind               *string                 `json:"kind"`
	Name               *PlayerName             `json:"name"`
	OriginalPlayerID   *string                 `json:"originalPlayerId"`
	PlayerID           *string                 `json:"playerId"`
	ProfileSettings    *ProfileSettings        `json:"profileSettings"`
	Title              *string                 `json:"title"`
}
