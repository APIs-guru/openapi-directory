package operations

import (
	"openapi/pkg/models/shared"
)

type BooksLayersVolumeAnnotationsGetPathParams struct {
	AnnotationID string `pathParam:"style=simple,explode=false,name=annotationId"`
	LayerID      string `pathParam:"style=simple,explode=false,name=layerId"`
	VolumeID     string `pathParam:"style=simple,explode=false,name=volumeId"`
}

type BooksLayersVolumeAnnotationsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Locale         *string           `queryParam:"style=form,explode=true,name=locale"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         *string           `queryParam:"style=form,explode=true,name=source"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksLayersVolumeAnnotationsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksLayersVolumeAnnotationsGetRequest struct {
	PathParams  BooksLayersVolumeAnnotationsGetPathParams
	QueryParams BooksLayersVolumeAnnotationsGetQueryParams
	Security    BooksLayersVolumeAnnotationsGetSecurity
}

type BooksLayersVolumeAnnotationsGetResponse struct {
	ContentType      string
	StatusCode       int64
	Volumeannotation *shared.Volumeannotation
}
