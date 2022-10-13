package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TagTemplateFieldID *string           `queryParam:"style=form,explode=true,name=tagTemplateFieldId"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest struct {
	PathParams  DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams
	QueryParams DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams
	Request     *shared.GoogleCloudDatacatalogV1beta1TagTemplateField `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity
}

type DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse struct {
	ContentType                                   string
	GoogleCloudDatacatalogV1beta1TagTemplateField *shared.GoogleCloudDatacatalogV1beta1TagTemplateField
	StatusCode                                    int64
}
