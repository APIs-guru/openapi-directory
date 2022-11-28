package operations

import (
	"openapi/pkg/models/shared"
)

type DatastoreProjectsRunAggregationQueryPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DatastoreProjectsRunAggregationQueryQueryParams struct {
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

type DatastoreProjectsRunAggregationQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsRunAggregationQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatastoreProjectsRunAggregationQuerySecurity struct {
	Option1 *DatastoreProjectsRunAggregationQuerySecurityOption1 `security:"option"`
	Option2 *DatastoreProjectsRunAggregationQuerySecurityOption2 `security:"option"`
}

type DatastoreProjectsRunAggregationQueryRequest struct {
	PathParams  DatastoreProjectsRunAggregationQueryPathParams
	QueryParams DatastoreProjectsRunAggregationQueryQueryParams
	Request     *shared.RunAggregationQueryRequest `request:"mediaType=application/json"`
	Security    DatastoreProjectsRunAggregationQuerySecurity
}

type DatastoreProjectsRunAggregationQueryResponse struct {
	ContentType                 string
	RunAggregationQueryResponse *shared.RunAggregationQueryResponse
	StatusCode                  int64
}
