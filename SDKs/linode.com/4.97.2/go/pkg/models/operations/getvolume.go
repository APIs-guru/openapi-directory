package operations

import (
	"openapi/pkg/models/shared"
)

type GetVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type GetVolumeQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetVolumeRequest struct {
	PathParams  GetVolumePathParams
	QueryParams GetVolumeQueryParams
	Security    GetVolumeSecurity
}

type GetVolumeResponse struct {
	ContentType                           string
	StatusCode                            int64
	Volume                                *shared.Volume
	GetVolumeDefaultApplicationJSONObject *GetVolumeDefaultApplicationJSON
}
