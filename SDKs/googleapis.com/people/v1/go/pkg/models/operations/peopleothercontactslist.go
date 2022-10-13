package operations

import (
	"openapi/pkg/models/shared"
)

type PeopleOtherContactsListSourcesEnum string

const (
	PeopleOtherContactsListSourcesEnumReadSourceTypeUnspecified   PeopleOtherContactsListSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	PeopleOtherContactsListSourcesEnumReadSourceTypeProfile       PeopleOtherContactsListSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	PeopleOtherContactsListSourcesEnumReadSourceTypeContact       PeopleOtherContactsListSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	PeopleOtherContactsListSourcesEnumReadSourceTypeDomainContact PeopleOtherContactsListSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type PeopleOtherContactsListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string                              `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key              *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize         *int64                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken        *string                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint      *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask         *string                              `queryParam:"style=form,explode=true,name=readMask"`
	RequestSyncToken *bool                                `queryParam:"style=form,explode=true,name=requestSyncToken"`
	Sources          []PeopleOtherContactsListSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
	SyncToken        *string                              `queryParam:"style=form,explode=true,name=syncToken"`
	UploadType       *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PeopleOtherContactsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeopleOtherContactsListRequest struct {
	QueryParams PeopleOtherContactsListQueryParams
	Security    PeopleOtherContactsListSecurity
}

type PeopleOtherContactsListResponse struct {
	ContentType               string
	ListOtherContactsResponse *shared.ListOtherContactsResponse
	StatusCode                int64
}
