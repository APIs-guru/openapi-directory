package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMylibraryAnnotationsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	ContentVersion *string           `queryParam:"style=form,explode=true,name=contentVersion"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LayerID        *string           `queryParam:"style=form,explode=true,name=layerId"`
	LayerIds       []string          `queryParam:"style=form,explode=true,name=layerIds"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted    *bool             `queryParam:"style=form,explode=true,name=showDeleted"`
	Source         *string           `queryParam:"style=form,explode=true,name=source"`
	UpdatedMax     *string           `queryParam:"style=form,explode=true,name=updatedMax"`
	UpdatedMin     *string           `queryParam:"style=form,explode=true,name=updatedMin"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VolumeID       *string           `queryParam:"style=form,explode=true,name=volumeId"`
}

type BooksMylibraryAnnotationsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMylibraryAnnotationsListRequest struct {
	QueryParams BooksMylibraryAnnotationsListQueryParams
	Security    BooksMylibraryAnnotationsListSecurity
}

type BooksMylibraryAnnotationsListResponse struct {
	Annotations *shared.Annotations
	ContentType string
	StatusCode  int64
}
