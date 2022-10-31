package operations

import (
	"openapi/pkg/models/shared"
)

type PeoplePeopleDeleteContactPhotoPathParams struct {
	ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
}

type PeoplePeopleDeleteContactPhotoSourcesEnum string

const (
	PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeUnspecified   PeoplePeopleDeleteContactPhotoSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeProfile       PeoplePeopleDeleteContactPhotoSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeContact       PeoplePeopleDeleteContactPhotoSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeDomainContact PeoplePeopleDeleteContactPhotoSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type PeoplePeopleDeleteContactPhotoQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                             `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                     `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                     `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                     `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PersonFields   *string                                     `queryParam:"style=form,explode=true,name=personFields"`
	PrettyPrint    *bool                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	Sources        []PeoplePeopleDeleteContactPhotoSourcesEnum `queryParam:"style=form,explode=true,name=sources"`
	UploadType     *string                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PeoplePeopleDeleteContactPhotoSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PeoplePeopleDeleteContactPhotoRequest struct {
	PathParams  PeoplePeopleDeleteContactPhotoPathParams
	QueryParams PeoplePeopleDeleteContactPhotoQueryParams
	Security    PeoplePeopleDeleteContactPhotoSecurity
}

type PeoplePeopleDeleteContactPhotoResponse struct {
	ContentType                string
	DeleteContactPhotoResponse *shared.DeleteContactPhotoResponse
	StatusCode                 int64
}
