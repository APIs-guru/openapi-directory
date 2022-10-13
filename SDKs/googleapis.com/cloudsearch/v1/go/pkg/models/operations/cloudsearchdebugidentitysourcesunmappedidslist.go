package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchDebugIdentitysourcesUnmappedidsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum string

const (
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumCodeUnspecified             CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "CODE_UNSPECIFIED"
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumNotFound                    CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "NOT_FOUND"
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumIdentitySourceNotFound      CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "IDENTITY_SOURCE_NOT_FOUND"
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumIdentitySourceMisconfigured CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "IDENTITY_SOURCE_MISCONFIGURED"
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumTooManyMappingsFound        CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "TOO_MANY_MAPPINGS_FOUND"
	CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumInternalError               CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum = "INTERNAL_ERROR"
)

type CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum                                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string                                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum                                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback                    *string                                                                 `queryParam:"style=form,explode=true,name=callback"`
	DebugOptionsEnableDebugging *bool                                                                   `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
	Fields                      *string                                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key                         *string                                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string                                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                    *int64                                                                  `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                   *string                                                                 `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                 *bool                                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string                                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	ResolutionStatusCode        *CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum `queryParam:"style=form,explode=true,name=resolutionStatusCode"`
	UploadType                  *string                                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string                                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugIdentitysourcesUnmappedidsListSecurity struct {
	Option1 *CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 `security:"option"`
	Option2 *CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 `security:"option"`
}

type CloudsearchDebugIdentitysourcesUnmappedidsListRequest struct {
	PathParams  CloudsearchDebugIdentitysourcesUnmappedidsListPathParams
	QueryParams CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams
	Security    CloudsearchDebugIdentitysourcesUnmappedidsListSecurity
}

type CloudsearchDebugIdentitysourcesUnmappedidsListResponse struct {
	ContentType                    string
	ListUnmappedIdentitiesResponse *shared.ListUnmappedIdentitiesResponse
	StatusCode                     int64
}
