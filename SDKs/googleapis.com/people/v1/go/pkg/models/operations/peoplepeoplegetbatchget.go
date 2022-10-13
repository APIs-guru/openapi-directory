package operations

import (
	"openapi/pkg/models/shared"
)

type PeoplePeopleGetBatchGetSourcesEnum string

const (
	PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeUnspecified   PeoplePeopleGetBatchGetSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeProfile       PeoplePeopleGetBatchGetSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeContact       PeoplePeopleGetBatchGetSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeDomainContact PeoplePeopleGetBatchGetSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type PeoplePeopleGetBatchGetQueryParams struct {
	DollarXgafv             *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken             *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt                     *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback                *string                              `queryParam:"style=form,explode=true,name=callback"`
	Fields                  *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key                     *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken              *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PersonFields            *string                              `queryParam:"style=form,explode=true,name=personFields"`
	PrettyPrint             *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser               *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestMaskIncludeField *string                              `queryParam:"style=form,explode=true,name=requestMask.includeField"`
	ResourceNames           []string                             `queryParam:"style=form,explode=true,name=resourceNames"`
	Sources                 []PeoplePeopleGetBatchGetSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
	UploadType              *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol          *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PeoplePeopleGetBatchGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption8 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption9 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption10 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurityOption11 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleGetBatchGetSecurity struct {
	Option1  *PeoplePeopleGetBatchGetSecurityOption1  `security:"option"`
	Option2  *PeoplePeopleGetBatchGetSecurityOption2  `security:"option"`
	Option3  *PeoplePeopleGetBatchGetSecurityOption3  `security:"option"`
	Option4  *PeoplePeopleGetBatchGetSecurityOption4  `security:"option"`
	Option5  *PeoplePeopleGetBatchGetSecurityOption5  `security:"option"`
	Option6  *PeoplePeopleGetBatchGetSecurityOption6  `security:"option"`
	Option7  *PeoplePeopleGetBatchGetSecurityOption7  `security:"option"`
	Option8  *PeoplePeopleGetBatchGetSecurityOption8  `security:"option"`
	Option9  *PeoplePeopleGetBatchGetSecurityOption9  `security:"option"`
	Option10 *PeoplePeopleGetBatchGetSecurityOption10 `security:"option"`
	Option11 *PeoplePeopleGetBatchGetSecurityOption11 `security:"option"`
}

type PeoplePeopleGetBatchGetRequest struct {
	QueryParams PeoplePeopleGetBatchGetQueryParams
	Security    PeoplePeopleGetBatchGetSecurity
}

type PeoplePeopleGetBatchGetResponse struct {
	ContentType       string
	GetPeopleResponse *shared.GetPeopleResponse
	StatusCode        int64
}
