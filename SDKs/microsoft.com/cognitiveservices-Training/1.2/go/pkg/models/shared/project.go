package shared

import (
"time")

type Project struct {
    Created *time.Time `json:"Created,omitempty" form:"name=Created"`
    CurrentIterationID *string `json:"CurrentIterationId,omitempty" form:"name=CurrentIterationId"`
    Description *string `json:"Description,omitempty" form:"name=Description"`
    ID *string `json:"Id,omitempty" form:"name=Id"`
    LastModified *time.Time `json:"LastModified,omitempty" form:"name=LastModified"`
    Name *string `json:"Name,omitempty" form:"name=Name"`
    Settings *ProjectSettings `json:"Settings,omitempty" form:"name=Settings"`
    ThumbnailURI *string `json:"ThumbnailUri,omitempty" form:"name=ThumbnailUri"`
    
}

