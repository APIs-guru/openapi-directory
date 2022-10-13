package shared

type ChannelStatusLongUploadsStatusEnum string

const (
	ChannelStatusLongUploadsStatusEnumLongUploadsUnspecified ChannelStatusLongUploadsStatusEnum = "longUploadsUnspecified"
	ChannelStatusLongUploadsStatusEnumAllowed                ChannelStatusLongUploadsStatusEnum = "allowed"
	ChannelStatusLongUploadsStatusEnumEligible               ChannelStatusLongUploadsStatusEnum = "eligible"
	ChannelStatusLongUploadsStatusEnumDisallowed             ChannelStatusLongUploadsStatusEnum = "disallowed"
)

type ChannelStatusPrivacyStatusEnum string

const (
	ChannelStatusPrivacyStatusEnumPublic   ChannelStatusPrivacyStatusEnum = "public"
	ChannelStatusPrivacyStatusEnumUnlisted ChannelStatusPrivacyStatusEnum = "unlisted"
	ChannelStatusPrivacyStatusEnumPrivate  ChannelStatusPrivacyStatusEnum = "private"
)

type ChannelStatus struct {
	IsLinked                *bool                               `json:"isLinked"`
	LongUploadsStatus       *ChannelStatusLongUploadsStatusEnum `json:"longUploadsStatus"`
	MadeForKids             *bool                               `json:"madeForKids"`
	PrivacyStatus           *ChannelStatusPrivacyStatusEnum     `json:"privacyStatus"`
	SelfDeclaredMadeForKids *bool                               `json:"selfDeclaredMadeForKids"`
}
