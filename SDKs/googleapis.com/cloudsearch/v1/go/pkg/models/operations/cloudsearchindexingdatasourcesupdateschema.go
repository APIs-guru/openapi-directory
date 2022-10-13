package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchIndexingDatasourcesUpdateSchemaPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchIndexingDatasourcesUpdateSchemaQueryParams struct {
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

type CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesUpdateSchemaSecurity struct {
	Option1 *CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1 `security:"option"`
	Option2 *CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2 `security:"option"`
	Option3 *CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3 `security:"option"`
}

type CloudsearchIndexingDatasourcesUpdateSchemaRequest struct {
	PathParams  CloudsearchIndexingDatasourcesUpdateSchemaPathParams
	QueryParams CloudsearchIndexingDatasourcesUpdateSchemaQueryParams
	Request     *shared.UpdateSchemaRequest `request:"mediaType=application/json"`
	Security    CloudsearchIndexingDatasourcesUpdateSchemaSecurity
}

type CloudsearchIndexingDatasourcesUpdateSchemaResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
