package shared

// ThirdPartyLink
// A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
type ThirdPartyLink struct {
	Etag         *string                `json:"etag,omitempty"`
	Kind         *string                `json:"kind,omitempty"`
	LinkingToken *string                `json:"linkingToken,omitempty"`
	Snippet      *ThirdPartyLinkSnippet `json:"snippet,omitempty"`
	Status       *ThirdPartyLinkStatus  `json:"status,omitempty"`
}
