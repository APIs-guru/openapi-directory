package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsTemplatesGetPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsTemplatesGetViewEnum string

const (
	DataflowProjectsTemplatesGetViewEnumMetadataOnly DataflowProjectsTemplatesGetViewEnum = "METADATA_ONLY"
)

type DataflowProjectsTemplatesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                               `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                               `queryParam:"style=form,explode=true,name=fields"`
	GcsPath        *string                               `queryParam:"style=form,explode=true,name=gcsPath"`
	Key            *string                               `queryParam:"style=form,explode=true,name=key"`
	Location       *string                               `queryParam:"style=form,explode=true,name=location"`
	OauthToken     *string                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *DataflowProjectsTemplatesGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type DataflowProjectsTemplatesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesGetSecurity struct {
	Option1 *DataflowProjectsTemplatesGetSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsTemplatesGetSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsTemplatesGetSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsTemplatesGetSecurityOption4 `security:"option"`
}

type DataflowProjectsTemplatesGetRequest struct {
	PathParams  DataflowProjectsTemplatesGetPathParams
	QueryParams DataflowProjectsTemplatesGetQueryParams
	Security    DataflowProjectsTemplatesGetSecurity
}

type DataflowProjectsTemplatesGetResponse struct {
	ContentType         string
	GetTemplateResponse *shared.GetTemplateResponse
	StatusCode          int64
}
