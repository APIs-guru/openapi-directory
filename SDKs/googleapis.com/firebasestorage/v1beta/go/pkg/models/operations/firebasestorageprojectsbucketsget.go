package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasestorageProjectsBucketsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebasestorageProjectsBucketsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebasestorageProjectsBucketsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasestorageProjectsBucketsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasestorageProjectsBucketsGetSecurity struct {
	Option1 *FirebasestorageProjectsBucketsGetSecurityOption1 `security:"option"`
	Option2 *FirebasestorageProjectsBucketsGetSecurityOption2 `security:"option"`
}

type FirebasestorageProjectsBucketsGetRequest struct {
	PathParams  FirebasestorageProjectsBucketsGetPathParams
	QueryParams FirebasestorageProjectsBucketsGetQueryParams
	Security    FirebasestorageProjectsBucketsGetSecurity
}

type FirebasestorageProjectsBucketsGetResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
