package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsSecuritySettingsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsSecuritySettingsCreateQueryParams struct {
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

type DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsSecuritySettingsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsSecuritySettingsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsSecuritySettingsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsSecuritySettingsCreatePathParams
	QueryParams DialogflowProjectsLocationsSecuritySettingsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3beta1SecuritySettings `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsSecuritySettingsCreateSecurity
}

type DialogflowProjectsLocationsSecuritySettingsCreateResponse struct {
	ContentType                                    string
	GoogleCloudDialogflowCxV3beta1SecuritySettings *shared.GoogleCloudDialogflowCxV3beta1SecuritySettings
	StatusCode                                     int64
}
