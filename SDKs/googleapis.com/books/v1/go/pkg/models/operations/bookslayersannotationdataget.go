package operations

import (
	"openapi/pkg/models/shared"
)

type BooksLayersAnnotationDataGetPathParams struct {
	AnnotationDataID string `pathParam:"style=simple,explode=false,name=annotationDataId"`
	LayerID          string `pathParam:"style=simple,explode=false,name=layerId"`
	VolumeID         string `pathParam:"style=simple,explode=false,name=volumeId"`
}

type BooksLayersAnnotationDataGetQueryParams struct {
	DollarXgafv         *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowWebDefinitions *bool             `queryParam:"style=form,explode=true,name=allowWebDefinitions"`
	Alt                 *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string           `queryParam:"style=form,explode=true,name=callback"`
	ContentVersion      string            `queryParam:"style=form,explode=true,name=contentVersion"`
	Fields              *string           `queryParam:"style=form,explode=true,name=fields"`
	H                   *int64            `queryParam:"style=form,explode=true,name=h"`
	Key                 *string           `queryParam:"style=form,explode=true,name=key"`
	Locale              *string           `queryParam:"style=form,explode=true,name=locale"`
	OauthToken          *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Scale               *int64            `queryParam:"style=form,explode=true,name=scale"`
	Source              *string           `queryParam:"style=form,explode=true,name=source"`
	UploadType          *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	W                   *int64            `queryParam:"style=form,explode=true,name=w"`
}

type BooksLayersAnnotationDataGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksLayersAnnotationDataGetRequest struct {
	PathParams  BooksLayersAnnotationDataGetPathParams
	QueryParams BooksLayersAnnotationDataGetQueryParams
	Security    BooksLayersAnnotationDataGetSecurity
}

type BooksLayersAnnotationDataGetResponse struct {
	ContentType              string
	DictionaryAnnotationdata *shared.DictionaryAnnotationdata
	StatusCode               int64
}
