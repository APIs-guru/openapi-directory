package operations

import (
	"openapi/pkg/models/shared"
)

type DrivelabelsUsersGetCapabilitiesPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DrivelabelsUsersGetCapabilitiesViewEnum string

const (
	DrivelabelsUsersGetCapabilitiesViewEnumLabelViewBasic DrivelabelsUsersGetCapabilitiesViewEnum = "LABEL_VIEW_BASIC"
	DrivelabelsUsersGetCapabilitiesViewEnumLabelViewFull  DrivelabelsUsersGetCapabilitiesViewEnum = "LABEL_VIEW_FULL"
)

type DrivelabelsUsersGetCapabilitiesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                        `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                  `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                          `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                  `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                  `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                  `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                                  `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string                                  `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                  `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                  `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                  `queryParam:"style=form,explode=true,name=upload_protocol"`
	UseAdminAccess *bool                                    `queryParam:"style=form,explode=true,name=useAdminAccess"`
	View           *DrivelabelsUsersGetCapabilitiesViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type DrivelabelsUsersGetCapabilitiesRequest struct {
	PathParams  DrivelabelsUsersGetCapabilitiesPathParams
	QueryParams DrivelabelsUsersGetCapabilitiesQueryParams
}

type DrivelabelsUsersGetCapabilitiesResponse struct {
	ContentType                                 string
	GoogleAppsDriveLabelsV2betaUserCapabilities *shared.GoogleAppsDriveLabelsV2betaUserCapabilities
	StatusCode                                  int64
}
