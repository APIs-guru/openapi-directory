package shared




type PlayerFriendStatusEnum string

const (
    PlayerFriendStatusEnumFriendStatusUnspecified PlayerFriendStatusEnum = "FRIEND_STATUS_UNSPECIFIED"
PlayerFriendStatusEnumNoRelationship PlayerFriendStatusEnum = "NO_RELATIONSHIP"
PlayerFriendStatusEnumFriend PlayerFriendStatusEnum = "FRIEND"
)


type PlayerName struct {
    FamilyName *string `json:"familyName,omitempty"`
    GivenName *string `json:"givenName,omitempty"`
    
}

type Player struct {
    AvatarImageURL *string `json:"avatarImageUrl,omitempty"`
    BannerURLLandscape *string `json:"bannerUrlLandscape,omitempty"`
    BannerURLPortrait *string `json:"bannerUrlPortrait,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    ExperienceInfo *PlayerExperienceInfo `json:"experienceInfo,omitempty"`
    FriendStatus *PlayerFriendStatusEnum `json:"friendStatus,omitempty"`
    GamePlayerID *string `json:"gamePlayerId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *PlayerName `json:"name,omitempty"`
    OriginalPlayerID *string `json:"originalPlayerId,omitempty"`
    PlayerID *string `json:"playerId,omitempty"`
    ProfileSettings *ProfileSettings `json:"profileSettings,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

