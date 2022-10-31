package operations

import (
	"openapi/pkg/models/shared"
)

type PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum string

const (
	PeoplePeopleSearchDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeUnspecified PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleSearchDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeContact     PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"
)

type PeoplePeopleSearchDirectoryPeopleSourcesEnum string

const (
	PeoplePeopleSearchDirectoryPeopleSourcesEnumDirectorySourceTypeUnspecified   PeoplePeopleSearchDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleSearchDirectoryPeopleSourcesEnumDirectorySourceTypeDomainContact PeoplePeopleSearchDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
	PeoplePeopleSearchDirectoryPeopleSourcesEnumDirectorySourceTypeDomainProfile PeoplePeopleSearchDirectoryPeopleSourcesEnum = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
)

type PeoplePeopleSearchDirectoryPeopleQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                             `queryParam:"style=form,explode=true,name=key"`
	MergeSources   []PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum `queryParam:"style=form,explode=true,name=mergeSources"`
	OauthToken     *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                              `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string                                             `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask       *string                                             `queryParam:"style=form,explode=true,name=readMask"`
	Sources        []PeoplePeopleSearchDirectoryPeopleSourcesEnum      `queryParam:"style=form,explode=true,name=sources"`
	UploadType     *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PeoplePeopleSearchDirectoryPeopleSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleSearchDirectoryPeopleRequest struct {
	QueryParams PeoplePeopleSearchDirectoryPeopleQueryParams
	Security    PeoplePeopleSearchDirectoryPeopleSecurity
}

type PeoplePeopleSearchDirectoryPeopleResponse struct {
	ContentType                   string
	SearchDirectoryPeopleResponse *shared.SearchDirectoryPeopleResponse
	StatusCode                    int64
}
