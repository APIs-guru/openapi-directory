package operations

import (
	"openapi/pkg/models/shared"
)

type DNSChangesListPathParams struct {
	ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSChangesListSortByEnum string

const (
	DNSChangesListSortByEnumChangeSequence DNSChangesListSortByEnum = "changeSequence"
)

type DNSChangesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                   `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                   `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                    `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                   `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                   `queryParam:"style=form,explode=true,name=quotaUser"`
	SortBy         *DNSChangesListSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder      *string                   `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSChangesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSChangesListSecurity struct {
	Option1 *DNSChangesListSecurityOption1 `security:"option"`
	Option2 *DNSChangesListSecurityOption2 `security:"option"`
	Option3 *DNSChangesListSecurityOption3 `security:"option"`
	Option4 *DNSChangesListSecurityOption4 `security:"option"`
}

type DNSChangesListRequest struct {
	PathParams  DNSChangesListPathParams
	QueryParams DNSChangesListQueryParams
	Security    DNSChangesListSecurity
}

type DNSChangesListResponse struct {
	ChangesListResponse *shared.ChangesListResponse
	ContentType         string
	StatusCode          int64
}
