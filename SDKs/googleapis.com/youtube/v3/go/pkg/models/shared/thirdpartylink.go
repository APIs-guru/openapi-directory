package shared

type ThirdPartyLink struct {
	Etag         *string                `json:"etag"`
	Kind         *string                `json:"kind"`
	LinkingToken *string                `json:"linkingToken"`
	Snippet      *ThirdPartyLinkSnippet `json:"snippet"`
	Status       *ThirdPartyLinkStatus  `json:"status"`
}
