package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeTypePathParams struct {
	TypeID string `pathParam:"style=simple,explode=false,name=typeId"`
}

type GetLinodeTypeRequest struct {
	PathParams GetLinodeTypePathParams
}

type GetLinodeTypeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeTypeResponse struct {
	ContentType                               string
	LinodeType                                *shared.LinodeType
	StatusCode                                int64
	GetLinodeTypeDefaultApplicationJSONObject *GetLinodeTypeDefaultApplicationJSON
}
