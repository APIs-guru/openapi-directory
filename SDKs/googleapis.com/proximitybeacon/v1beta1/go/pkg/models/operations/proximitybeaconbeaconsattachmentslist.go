package operations

import (
	"openapi/pkg/models/shared"
)

type ProximitybeaconBeaconsAttachmentsListPathParams struct {
	BeaconName string `pathParam:"style=simple,explode=false,name=beaconName"`
}

type ProximitybeaconBeaconsAttachmentsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NamespacedType *string           `queryParam:"style=form,explode=true,name=namespacedType"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProjectID      *string           `queryParam:"style=form,explode=true,name=projectId"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ProximitybeaconBeaconsAttachmentsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ProximitybeaconBeaconsAttachmentsListRequest struct {
	PathParams  ProximitybeaconBeaconsAttachmentsListPathParams
	QueryParams ProximitybeaconBeaconsAttachmentsListQueryParams
	Security    ProximitybeaconBeaconsAttachmentsListSecurity
}

type ProximitybeaconBeaconsAttachmentsListResponse struct {
	ContentType                   string
	ListBeaconAttachmentsResponse *shared.ListBeaconAttachmentsResponse
	StatusCode                    int64
}
