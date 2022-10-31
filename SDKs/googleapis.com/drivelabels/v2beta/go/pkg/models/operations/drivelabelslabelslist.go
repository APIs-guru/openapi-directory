package operations

import (
	"openapi/pkg/models/shared"
)

type DrivelabelsLabelsListMinimumRoleEnum string

const (
	DrivelabelsLabelsListMinimumRoleEnumLabelRoleUnspecified DrivelabelsLabelsListMinimumRoleEnum = "LABEL_ROLE_UNSPECIFIED"
	DrivelabelsLabelsListMinimumRoleEnumReader               DrivelabelsLabelsListMinimumRoleEnum = "READER"
	DrivelabelsLabelsListMinimumRoleEnumApplier              DrivelabelsLabelsListMinimumRoleEnum = "APPLIER"
	DrivelabelsLabelsListMinimumRoleEnumOrganizer            DrivelabelsLabelsListMinimumRoleEnum = "ORGANIZER"
	DrivelabelsLabelsListMinimumRoleEnumEditor               DrivelabelsLabelsListMinimumRoleEnum = "EDITOR"
)

type DrivelabelsLabelsListViewEnum string

const (
	DrivelabelsLabelsListViewEnumLabelViewBasic DrivelabelsLabelsListViewEnum = "LABEL_VIEW_BASIC"
	DrivelabelsLabelsListViewEnumLabelViewFull  DrivelabelsLabelsListViewEnum = "LABEL_VIEW_FULL"
)

type DrivelabelsLabelsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                       `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                               `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                               `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                               `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string                               `queryParam:"style=form,explode=true,name=languageCode"`
	MinimumRole    *DrivelabelsLabelsListMinimumRoleEnum `queryParam:"style=form,explode=true,name=minimumRole"`
	OauthToken     *string                               `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                               `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	PublishedOnly  *bool                                 `queryParam:"style=form,explode=true,name=publishedOnly"`
	QuotaUser      *string                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	UseAdminAccess *bool                                 `queryParam:"style=form,explode=true,name=useAdminAccess"`
	View           *DrivelabelsLabelsListViewEnum        `queryParam:"style=form,explode=true,name=view"`
}

type DrivelabelsLabelsListRequest struct {
	QueryParams DrivelabelsLabelsListQueryParams
}

type DrivelabelsLabelsListResponse struct {
	ContentType                                   string
	GoogleAppsDriveLabelsV2betaListLabelsResponse *shared.GoogleAppsDriveLabelsV2betaListLabelsResponse
	StatusCode                                    int64
}
