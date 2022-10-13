package operations

import (
	"openapi/pkg/models/shared"
)

type PeoplePeopleListDirectoryPeopleMergeSourcesEnum string

const (
	PeoplePeopleListDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeUnspecified PeoplePeopleListDirectoryPeopleMergeSourcesEnum = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleListDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeContact     PeoplePeopleListDirectoryPeopleMergeSourcesEnum = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
)

type PeoplePeopleListDirectoryPeopleSourcesEnum string

const (
	PeoplePeopleListDirectoryPeopleSourcesEnumDirectorySourceTypeUnspecified   PeoplePeopleListDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleListDirectoryPeopleSourcesEnumDirectorySourceTypeDomainContact PeoplePeopleListDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
	PeoplePeopleListDirectoryPeopleSourcesEnumDirectorySourceTypeDomainProfile PeoplePeopleListDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
)

type PeoplePeopleListDirectoryPeopleQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string                                           `queryParam:"style=form,explode=true,name=fields"`
	Key              *string                                           `queryParam:"style=form,explode=true,name=key"`
	MergeSources     []PeoplePeopleListDirectoryPeopleMergeSourcesEnum `queryParam:"style=form,explode=true,name=mergeSources"`
	OauthToken       *string                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize         *int64                                            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken        *string                                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint      *bool                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask         *string                                           `queryParam:"style=form,explode=true,name=readMask"`
	RequestSyncToken *bool                                             `queryParam:"style=form,explode=true,name=requestSyncToken"`
	Sources          []PeoplePeopleListDirectoryPeopleSourcesEnum      `queryParam:"style=form,explode=true,name=sources"`
	SyncToken        *string                                           `queryParam:"style=form,explode=true,name=syncToken"`
	UploadType       *string                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PeoplePeopleListDirectoryPeopleSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleListDirectoryPeopleRequest struct {
	QueryParams PeoplePeopleListDirectoryPeopleQueryParams
	Security    PeoplePeopleListDirectoryPeopleSecurity
}

type PeoplePeopleListDirectoryPeopleResponse struct {
	ContentType                 string
	ListDirectoryPeopleResponse *shared.ListDirectoryPeopleResponse
	StatusCode                  int64
}
