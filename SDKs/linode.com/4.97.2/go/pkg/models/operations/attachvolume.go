package operations

import (
	"openapi/pkg/models/shared"
)

type AttachVolumePathParams struct {
	VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
}

type AttachVolumeRequestBody struct {
	ConfigID           *int64 `json:"config_id,omitempty"`
	LinodeID           int64  `json:"linode_id"`
	PersistAcrossBoots *bool  `json:"persist_across_boots,omitempty"`
}

type AttachVolumeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AttachVolumeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AttachVolumeRequest struct {
	PathParams AttachVolumePathParams
	Request    AttachVolumeRequestBody `request:"mediaType=application/json"`
	Security   AttachVolumeSecurity
}

type AttachVolumeResponse struct {
	ContentType                              string
	StatusCode                               int64
	Volume                                   *shared.Volume
	AttachVolumeDefaultApplicationJSONObject *AttachVolumeDefaultApplicationJSON
}
