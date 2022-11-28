package shared

import (
	"time"
)

// CommentQuotedFileContent
// The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
type CommentQuotedFileContent struct {
	MimeType *string `json:"mimeType,omitempty"`
	Value    *string `json:"value,omitempty"`
}

// Comment
// A comment on a file.
type Comment struct {
	Anchor            *string                   `json:"anchor,omitempty"`
	Author            *User                     `json:"author,omitempty"`
	Content           *string                   `json:"content,omitempty"`
	CreatedTime       *time.Time                `json:"createdTime,omitempty"`
	Deleted           *bool                     `json:"deleted,omitempty"`
	HTMLContent       *string                   `json:"htmlContent,omitempty"`
	ID                *string                   `json:"id,omitempty"`
	Kind              *string                   `json:"kind,omitempty"`
	ModifiedTime      *time.Time                `json:"modifiedTime,omitempty"`
	QuotedFileContent *CommentQuotedFileContent `json:"quotedFileContent,omitempty"`
	Replies           []Reply                   `json:"replies,omitempty"`
	Resolved          *bool                     `json:"resolved,omitempty"`
}
