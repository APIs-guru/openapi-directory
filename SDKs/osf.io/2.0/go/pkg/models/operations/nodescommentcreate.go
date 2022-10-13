package operations

import (
	"time"
)

type NodesCommentCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesCommentCreateRequestBodyAttributesAttributes struct {
	CanEdit      *bool      `json:"can_edit"`
	Content      *string    `json:"content"`
	DateCreated  *time.Time `json:"date_created"`
	DateModified *time.Time `json:"date_modified"`
	Deleted      *bool      `json:"deleted"`
	HasChildren  *bool      `json:"has_children"`
	HasReport    *bool      `json:"has_report"`
	IsAbuse      *bool      `json:"is_abuse"`
	IsHam        *bool      `json:"is_ham"`
	Modified     *bool      `json:"modified"`
	Page         *string    `json:"page"`
}

type NodesCommentCreateRequestBodyLinksLinks struct {
	Self *string `json:"self"`
}

type NodesCommentCreateRequestBodyRelationshipsRelationships struct {
	Node    *string `json:"node"`
	Replies *string `json:"replies"`
	Reports *string `json:"reports"`
	Target  *string `json:"target"`
	User    *string `json:"user"`
}

type NodesCommentCreateRequestBodyComment struct {
	Attributes    *NodesCommentCreateRequestBodyAttributesAttributes       `json:"attributes"`
	ID            string                                                   `json:"id"`
	Links         *NodesCommentCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships *NodesCommentCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          *string                                                  `json:"type"`
}

type NodesCommentCreateRequest struct {
	PathParams NodesCommentCreatePathParams
	Request    NodesCommentCreateRequestBodyComment `request:"mediaType=application/json"`
}

type NodesCommentCreateResponse struct {
	ContentType string
	StatusCode  int64
}
