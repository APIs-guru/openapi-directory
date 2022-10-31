package operations

import (
	"openapi/pkg/models/shared"
)

type GamesApplicationsGetEndPointEndPointTypeEnum string

const (
	GamesApplicationsGetEndPointEndPointTypeEnumEndPointTypeUnspecified GamesApplicationsGetEndPointEndPointTypeEnum = "END_POINT_TYPE_UNSPECIFIED"
	GamesApplicationsGetEndPointEndPointTypeEnumProfileCreation         GamesApplicationsGetEndPointEndPointTypeEnum = "PROFILE_CREATION"
	GamesApplicationsGetEndPointEndPointTypeEnumProfileSettings         GamesApplicationsGetEndPointEndPointTypeEnum = "PROFILE_SETTINGS"
)

type GamesApplicationsGetEndPointQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	ApplicationID  *string                                       `queryParam:"style=form,explode=true,name=applicationId"`
	Callback       *string                                       `queryParam:"style=form,explode=true,name=callback"`
	EndPointType   *GamesApplicationsGetEndPointEndPointTypeEnum `queryParam:"style=form,explode=true,name=endPointType"`
	Fields         *string                                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesApplicationsGetEndPointSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesApplicationsGetEndPointRequest struct {
	QueryParams GamesApplicationsGetEndPointQueryParams
	Security    GamesApplicationsGetEndPointSecurity
}

type GamesApplicationsGetEndPointResponse struct {
	ContentType string
	EndPoint    *shared.EndPoint
	StatusCode  int64
}
