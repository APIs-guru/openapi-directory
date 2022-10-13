package shared

type PlayerName struct {
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
}

type Player struct {
	AvatarImageURL     *string                            `json:"avatarImageUrl"`
	BannerURLLandscape *string                            `json:"bannerUrlLandscape"`
	BannerURLPortrait  *string                            `json:"bannerUrlPortrait"`
	DisplayName        *string                            `json:"displayName"`
	ExperienceInfo     *GamesPlayerExperienceInfoResource `json:"experienceInfo"`
	Kind               *string                            `json:"kind"`
	Name               *PlayerName                        `json:"name"`
	OriginalPlayerID   *string                            `json:"originalPlayerId"`
	PlayerID           *string                            `json:"playerId"`
	ProfileSettings    *ProfileSettings                   `json:"profileSettings"`
	Title              *string                            `json:"title"`
}
