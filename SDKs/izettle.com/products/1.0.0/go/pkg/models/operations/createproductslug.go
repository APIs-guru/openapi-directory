package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductSlugPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type CreateProductSlugSecurityOption1 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type CreateProductSlugSecurityOption2 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateProductSlugSecurity struct {
	Option1 *CreateProductSlugSecurityOption1 `security:"option"`
	Option2 *CreateProductSlugSecurityOption2 `security:"option"`
}

type CreateProductSlugRequest struct {
	PathParams CreateProductSlugPathParams
	Request    shared.CreateSlugRequest `request:"mediaType=application/json"`
	Security   CreateProductSlugSecurity
}

type CreateProductSlugResponse struct {
	ContentType  string
	SlugResponse *shared.SlugResponse
	StatusCode   int64
}
