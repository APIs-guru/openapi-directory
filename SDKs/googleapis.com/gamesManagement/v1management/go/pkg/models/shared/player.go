package shared

// PlayerName
// An object representation of the individual components of the player's name. For some players, these fields may not be present.
type PlayerName struct {
	FamilyName *string `json:"familyName,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}

// Player
// A Player resource.
type Player struct {
	AvatarImageURL     *string                            `json:"avatarImageUrl,omitempty"`
	BannerURLLandscape *string                            `json:"bannerUrlLandscape,omitempty"`
	BannerURLPortrait  *string                            `json:"bannerUrlPortrait,omitempty"`
	DisplayName        *string                            `json:"displayName,omitempty"`
	ExperienceInfo     *GamesPlayerExperienceInfoResource `json:"experienceInfo,omitempty"`
	Kind               *string                            `json:"kind,omitempty"`
	Name               *PlayerName                        `json:"name,omitempty"`
	OriginalPlayerID   *string                            `json:"originalPlayerId,omitempty"`
	PlayerID           *string                            `json:"playerId,omitempty"`
	ProfileSettings    *ProfileSettings                   `json:"profileSettings,omitempty"`
	Title              *string                            `json:"title,omitempty"`
}
