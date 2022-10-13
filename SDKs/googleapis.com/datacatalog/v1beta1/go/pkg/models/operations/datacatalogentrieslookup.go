package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogEntriesLookupQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LinkedResource *string           `queryParam:"style=form,explode=true,name=linkedResource"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SQLResource    *string           `queryParam:"style=form,explode=true,name=sqlResource"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatacatalogEntriesLookupSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogEntriesLookupRequest struct {
	QueryParams DatacatalogEntriesLookupQueryParams
	Security    DatacatalogEntriesLookupSecurity
}

type DatacatalogEntriesLookupResponse struct {
	ContentType                        string
	GoogleCloudDatacatalogV1beta1Entry *shared.GoogleCloudDatacatalogV1beta1Entry
	StatusCode                         int64
}
