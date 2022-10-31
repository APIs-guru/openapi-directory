package shared

import (
"time")

type Project struct {
    Created *time.Time `json:"created,omitempty" form:"name=created"`
    Description *string `json:"description,omitempty" form:"name=description"`
    ID *string `json:"id,omitempty" form:"name=id"`
    LastModified *time.Time `json:"lastModified,omitempty" form:"name=lastModified"`
    Name *string `json:"name,omitempty" form:"name=name"`
    Settings *ProjectSettings `json:"settings,omitempty" form:"name=settings"`
    ThumbnailURI *string `json:"thumbnailUri,omitempty" form:"name=thumbnailUri"`
    
}

