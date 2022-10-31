package operations

import (
	"openapi/pkg/models/shared"
)

type RunNamespacesDomainmappingsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RunNamespacesDomainmappingsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DryRun         *string           `queryParam:"style=form,explode=true,name=dryRun"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type RunNamespacesDomainmappingsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunNamespacesDomainmappingsCreateRequest struct {
	PathParams  RunNamespacesDomainmappingsCreatePathParams
	QueryParams RunNamespacesDomainmappingsCreateQueryParams
	Request     *shared.DomainMapping `request:"mediaType=application/json"`
	Security    RunNamespacesDomainmappingsCreateSecurity
}

type RunNamespacesDomainmappingsCreateResponse struct {
	ContentType   string
	DomainMapping *shared.DomainMapping
	StatusCode    int64
}
