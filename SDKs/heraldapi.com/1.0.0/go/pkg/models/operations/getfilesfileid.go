package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesFileIDPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file_id"`
}

type GetFilesFileID200ApplicationJSON struct {
	File *shared.FileV1 `json:"file,omitempty"`
}

type GetFilesFileID400ApplicationJSON struct {
	Errors *shared.ErrorV1 `json:"errors,omitempty"`
}

type GetFilesFileID404ApplicationJSON struct {
	Errors *shared.ErrorV1 `json:"errors,omitempty"`
}

type GetFilesFileIDRequest struct {
	PathParams GetFilesFileIDPathParams
}

type GetFilesFileIDResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetFilesFileID200ApplicationJSONObject *GetFilesFileID200ApplicationJSON
	GetFilesFileID400ApplicationJSONObject *GetFilesFileID400ApplicationJSON
	GetFilesFileID404ApplicationJSONObject *GetFilesFileID404ApplicationJSON
}
