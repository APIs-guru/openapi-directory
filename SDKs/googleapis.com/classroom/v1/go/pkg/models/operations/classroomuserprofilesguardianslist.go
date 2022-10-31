package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomUserProfilesGuardiansListPathParams struct {
	StudentID string `pathParam:"style=simple,explode=false,name=studentId"`
}

type ClassroomUserProfilesGuardiansListQueryParams struct {
	DollarXgafv         *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string           `queryParam:"style=form,explode=true,name=fields"`
	InvitedEmailAddress *string           `queryParam:"style=form,explode=true,name=invitedEmailAddress"`
	Key                 *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize            *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken           *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint         *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType          *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomUserProfilesGuardiansListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomUserProfilesGuardiansListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomUserProfilesGuardiansListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomUserProfilesGuardiansListSecurity struct {
	Option1 *ClassroomUserProfilesGuardiansListSecurityOption1 `security:"option"`
	Option2 *ClassroomUserProfilesGuardiansListSecurityOption2 `security:"option"`
	Option3 *ClassroomUserProfilesGuardiansListSecurityOption3 `security:"option"`
}

type ClassroomUserProfilesGuardiansListRequest struct {
	PathParams  ClassroomUserProfilesGuardiansListPathParams
	QueryParams ClassroomUserProfilesGuardiansListQueryParams
	Security    ClassroomUserProfilesGuardiansListSecurity
}

type ClassroomUserProfilesGuardiansListResponse struct {
	ContentType           string
	ListGuardiansResponse *shared.ListGuardiansResponse
	StatusCode            int64
}
