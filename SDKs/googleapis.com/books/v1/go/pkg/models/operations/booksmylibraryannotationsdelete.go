package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMylibraryAnnotationsDeletePathParams struct {
	AnnotationID string `pathParam:"style=simple,explode=false,name=annotationId"`
}

type BooksMylibraryAnnotationsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         *string           `queryParam:"style=form,explode=true,name=source"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksMylibraryAnnotationsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMylibraryAnnotationsDeleteRequest struct {
	PathParams  BooksMylibraryAnnotationsDeletePathParams
	QueryParams BooksMylibraryAnnotationsDeleteQueryParams
	Security    BooksMylibraryAnnotationsDeleteSecurity
}

type BooksMylibraryAnnotationsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
