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

// ChannelStatus
// JSON template for the status part of a channel.
type ChannelStatus struct {
	IsLinked                *bool                               `json:"isLinked,omitempty"`
	LongUploadsStatus       *ChannelStatusLongUploadsStatusEnum `json:"longUploadsStatus,omitempty"`
	MadeForKids             *bool                               `json:"madeForKids,omitempty"`
	PrivacyStatus           *ChannelStatusPrivacyStatusEnum     `json:"privacyStatus,omitempty"`
	SelfDeclaredMadeForKids *bool                               `json:"selfDeclaredMadeForKids,omitempty"`
}
