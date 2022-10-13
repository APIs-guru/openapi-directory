package shared

import (
	"time"
)

type CommentQuotedFileContent struct {
	MimeType *string `json:"mimeType"`
	Value    *string `json:"value"`
}

type Comment struct {
	Anchor            *string                   `json:"anchor"`
	Author            *User                     `json:"author"`
	Content           *string                   `json:"content"`
	CreatedTime       *time.Time                `json:"createdTime"`
	Deleted           *bool                     `json:"deleted"`
	HTMLContent       *string                   `json:"htmlContent"`
	ID                *string                   `json:"id"`
	Kind              *string                   `json:"kind"`
	ModifiedTime      *time.Time                `json:"modifiedTime"`
	QuotedFileContent *CommentQuotedFileContent `json:"quotedFileContent"`
	Replies           []Reply                   `json:"replies"`
	Resolved          *bool                     `json:"resolved"`
}
