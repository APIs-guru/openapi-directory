package operations

import (
	"time"
)

type NodesCommentCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesCommentCreateRequestBodyAttributesAttributes struct {
	CanEdit      *bool      `json:"can_edit,omitempty"`
	Content      *string    `json:"content,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateModified *time.Time `json:"date_modified,omitempty"`
	Deleted      *bool      `json:"deleted,omitempty"`
	HasChildren  *bool      `json:"has_children,omitempty"`
	HasReport    *bool      `json:"has_report,omitempty"`
	IsAbuse      *bool      `json:"is_abuse,omitempty"`
	IsHam        *bool      `json:"is_ham,omitempty"`
	Modified     *bool      `json:"modified,omitempty"`
	Page         *string    `json:"page,omitempty"`
}

type NodesCommentCreateRequestBodyLinksLinks struct {
	Self *string `json:"self,omitempty"`
}

type NodesCommentCreateRequestBodyRelationshipsRelationships struct {
	Node    *string `json:"node,omitempty"`
	Replies *string `json:"replies,omitempty"`
	Reports *string `json:"reports,omitempty"`
	Target  *string `json:"target,omitempty"`
	User    *string `json:"user,omitempty"`
}

type NodesCommentCreateRequestBodyComment struct {
	Attributes    *NodesCommentCreateRequestBodyAttributesAttributes       `json:"attributes,omitempty"`
	ID            string                                                   `json:"id"`
	Links         *NodesCommentCreateRequestBodyLinksLinks                 `json:"links,omitempty"`
	Relationships *NodesCommentCreateRequestBodyRelationshipsRelationships `json:"relationships,omitempty"`
	Type          *string                                                  `json:"type,omitempty"`
}

type NodesCommentCreateRequest struct {
	PathParams NodesCommentCreatePathParams
	Request    NodesCommentCreateRequestBodyComment `request:"mediaType=application/json"`
}

type NodesCommentCreateResponse struct {
	ContentType string
	StatusCode  int64
}
