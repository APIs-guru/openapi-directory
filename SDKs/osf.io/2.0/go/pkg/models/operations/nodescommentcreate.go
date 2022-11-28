package operations

type NodesCommentCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

// NodesCommentCreateCommentAttributesInput
// The properties of the comment entity.
type NodesCommentCreateCommentAttributesInput struct {
	Content *string `json:"content,omitempty"`
}

type NodesCommentCreateCommentInput struct {
	Attributes *NodesCommentCreateCommentAttributesInput `json:"attributes,omitempty"`
}

type NodesCommentCreateRequest struct {
	PathParams NodesCommentCreatePathParams
	Request    NodesCommentCreateCommentInput `request:"mediaType=application/json"`
}

type NodesCommentCreateResponse struct {
	ContentType string
	StatusCode  int64
}
