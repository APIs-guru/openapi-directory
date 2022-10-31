package shared

type AnalyzeCommentRequest struct {
	ClientToken         *string                        `json:"clientToken,omitempty"`
	Comment             *TextEntry                     `json:"comment,omitempty"`
	CommunityID         *string                        `json:"communityId,omitempty"`
	Context             *Context                       `json:"context,omitempty"`
	DoNotStore          *bool                          `json:"doNotStore,omitempty"`
	Languages           []string                       `json:"languages,omitempty"`
	RequestedAttributes map[string]AttributeParameters `json:"requestedAttributes,omitempty"`
	SessionID           *string                        `json:"sessionId,omitempty"`
	SpanAnnotations     *bool                          `json:"spanAnnotations,omitempty"`
}
