package shared

import (
"time")

type CommentQuotedFileContent struct {
    MimeType *string `json:"mimeType,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type Comment struct {
    Anchor *string `json:"anchor,omitempty"`
    Author *User `json:"author,omitempty"`
    Content *string `json:"content,omitempty"`
    CreatedTime *time.Time `json:"createdTime,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    HTMLContent *string `json:"htmlContent,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ModifiedTime *time.Time `json:"modifiedTime,omitempty"`
    QuotedFileContent *CommentQuotedFileContent `json:"quotedFileContent,omitempty"`
    Replies []Reply `json:"replies,omitempty"`
    Resolved *bool `json:"resolved,omitempty"`
    
}

