package operations

import (
	"openapi/pkg/models/shared"
)

type LicensingLicenseAssignmentsListForProductAndSkuPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
	SkuID     string `pathParam:"style=simple,explode=false,name=skuId"`
}

type LicensingLicenseAssignmentsListForProductAndSkuQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CustomerID     string            `queryParam:"style=form,explode=true,name=customerId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type LicensingLicenseAssignmentsListForProductAndSkuSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type LicensingLicenseAssignmentsListForProductAndSkuRequest struct {
	PathParams  LicensingLicenseAssignmentsListForProductAndSkuPathParams
	QueryParams LicensingLicenseAssignmentsListForProductAndSkuQueryParams
	Security    LicensingLicenseAssignmentsListForProductAndSkuSecurity
}

type LicensingLicenseAssignmentsListForProductAndSkuResponse struct {
	ContentType           string
	LicenseAssignmentList *shared.LicenseAssignmentList
	StatusCode            int64
}
