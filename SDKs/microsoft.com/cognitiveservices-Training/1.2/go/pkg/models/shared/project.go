package shared

import (
	"time"
)

type Project struct {
	Created            *time.Time       `json:"Created" form:"name=Created"`
	CurrentIterationID *string          `json:"CurrentIterationId" form:"name=CurrentIterationId"`
	Description        *string          `json:"Description" form:"name=Description"`
	ID                 *string          `json:"Id" form:"name=Id"`
	LastModified       *time.Time       `json:"LastModified" form:"name=LastModified"`
	Name               *string          `json:"Name" form:"name=Name"`
	Settings           *ProjectSettings `json:"Settings" form:"name=Settings"`
	ThumbnailURI       *string          `json:"ThumbnailUri" form:"name=ThumbnailUri"`
}
