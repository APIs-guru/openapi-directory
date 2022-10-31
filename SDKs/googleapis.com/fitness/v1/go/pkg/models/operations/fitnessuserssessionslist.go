package operations

import (
	"openapi/pkg/models/shared"
)

type FitnessUsersSessionsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type FitnessUsersSessionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	ActivityType   []int64           `queryParam:"style=form,explode=true,name=activityType"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EndTime        *string           `queryParam:"style=form,explode=true,name=endTime"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeDeleted *bool             `queryParam:"style=form,explode=true,name=includeDeleted"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime      *string           `queryParam:"style=form,explode=true,name=startTime"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FitnessUsersSessionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption12 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption13 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption14 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption15 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption16 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption17 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption18 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption19 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption20 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption21 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurityOption22 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FitnessUsersSessionsListSecurity struct {
	Option1  *FitnessUsersSessionsListSecurityOption1  `security:"option"`
	Option2  *FitnessUsersSessionsListSecurityOption2  `security:"option"`
	Option3  *FitnessUsersSessionsListSecurityOption3  `security:"option"`
	Option4  *FitnessUsersSessionsListSecurityOption4  `security:"option"`
	Option5  *FitnessUsersSessionsListSecurityOption5  `security:"option"`
	Option6  *FitnessUsersSessionsListSecurityOption6  `security:"option"`
	Option7  *FitnessUsersSessionsListSecurityOption7  `security:"option"`
	Option8  *FitnessUsersSessionsListSecurityOption8  `security:"option"`
	Option9  *FitnessUsersSessionsListSecurityOption9  `security:"option"`
	Option10 *FitnessUsersSessionsListSecurityOption10 `security:"option"`
	Option11 *FitnessUsersSessionsListSecurityOption11 `security:"option"`
	Option12 *FitnessUsersSessionsListSecurityOption12 `security:"option"`
	Option13 *FitnessUsersSessionsListSecurityOption13 `security:"option"`
	Option14 *FitnessUsersSessionsListSecurityOption14 `security:"option"`
	Option15 *FitnessUsersSessionsListSecurityOption15 `security:"option"`
	Option16 *FitnessUsersSessionsListSecurityOption16 `security:"option"`
	Option17 *FitnessUsersSessionsListSecurityOption17 `security:"option"`
	Option18 *FitnessUsersSessionsListSecurityOption18 `security:"option"`
	Option19 *FitnessUsersSessionsListSecurityOption19 `security:"option"`
	Option20 *FitnessUsersSessionsListSecurityOption20 `security:"option"`
	Option21 *FitnessUsersSessionsListSecurityOption21 `security:"option"`
	Option22 *FitnessUsersSessionsListSecurityOption22 `security:"option"`
}

type FitnessUsersSessionsListRequest struct {
	PathParams  FitnessUsersSessionsListPathParams
	QueryParams FitnessUsersSessionsListQueryParams
	Security    FitnessUsersSessionsListSecurity
}

type FitnessUsersSessionsListResponse struct {
	ContentType          string
	ListSessionsResponse *shared.ListSessionsResponse
	StatusCode           int64
}
