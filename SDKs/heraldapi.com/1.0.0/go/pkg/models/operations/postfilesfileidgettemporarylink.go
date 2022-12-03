package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesFileIDGetTemporaryLinkPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file_id"`
}

type PostFilesFileIDGetTemporaryLink200ApplicationJSON struct {
	TemporaryLink *shared.TemporaryLinkV1 `json:"temporary_link,omitempty"`
}

type PostFilesFileIDGetTemporaryLink400ApplicationJSON struct {
	Errors *shared.ErrorV1 `json:"errors,omitempty"`
}

type PostFilesFileIDGetTemporaryLink404ApplicationJSON struct {
	Errors *shared.ErrorV1 `json:"errors,omitempty"`
}

type PostFilesFileIDGetTemporaryLinkRequest struct {
	PathParams PostFilesFileIDGetTemporaryLinkPathParams
}

type PostFilesFileIDGetTemporaryLinkResponse struct {
	Body                                                    []byte
	ContentType                                             string
	StatusCode                                              int64
	PostFilesFileIDGetTemporaryLink200ApplicationJSONObject *PostFilesFileIDGetTemporaryLink200ApplicationJSON
	PostFilesFileIDGetTemporaryLink400ApplicationJSONObject *PostFilesFileIDGetTemporaryLink400ApplicationJSON
	PostFilesFileIDGetTemporaryLink404ApplicationJSONObject *PostFilesFileIDGetTemporaryLink404ApplicationJSON
}
