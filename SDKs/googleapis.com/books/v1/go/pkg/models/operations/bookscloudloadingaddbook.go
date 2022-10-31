package operations

import (
	"openapi/pkg/models/shared"
)

type BooksCloudloadingAddBookQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	DriveDocumentID   *string           `queryParam:"style=form,explode=true,name=drive_document_id"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	MimeType          *string           `queryParam:"style=form,explode=true,name=mime_type"`
	Name              *string           `queryParam:"style=form,explode=true,name=name"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadClientToken *string           `queryParam:"style=form,explode=true,name=upload_client_token"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksCloudloadingAddBookSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksCloudloadingAddBookRequest struct {
	QueryParams BooksCloudloadingAddBookQueryParams
	Security    BooksCloudloadingAddBookSecurity
}

type BooksCloudloadingAddBookResponse struct {
	BooksCloudloadingResource *shared.BooksCloudloadingResource
	ContentType               string
	StatusCode                int64
}
