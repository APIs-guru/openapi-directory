package shared

import (
"time")

type ImageAttachment struct {
    ContentType string `json:"content_type"`
    Created *time.Time `json:"created,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    ImageHeight int64 `json:"image_height"`
    ImageWidth int64 `json:"image_width"`
    Name *string `json:"name,omitempty"`
    ObjectID int64 `json:"object_id"`
    Parent *string `json:"parent,omitempty"`
    
}

