package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchIndexingDatasourcesItemsPollPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchIndexingDatasourcesItemsPollQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchIndexingDatasourcesItemsPollSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsPollSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsPollSecurity struct {
	Option1 *CloudsearchIndexingDatasourcesItemsPollSecurityOption1 `security:"option"`
	Option2 *CloudsearchIndexingDatasourcesItemsPollSecurityOption2 `security:"option"`
}

type CloudsearchIndexingDatasourcesItemsPollRequest struct {
	PathParams  CloudsearchIndexingDatasourcesItemsPollPathParams
	QueryParams CloudsearchIndexingDatasourcesItemsPollQueryParams
	Request     *shared.PollItemsRequest `request:"mediaType=application/json"`
	Security    CloudsearchIndexingDatasourcesItemsPollSecurity
}

type CloudsearchIndexingDatasourcesItemsPollResponse struct {
	ContentType       string
	PollItemsResponse *shared.PollItemsResponse
	StatusCode        int64
}
