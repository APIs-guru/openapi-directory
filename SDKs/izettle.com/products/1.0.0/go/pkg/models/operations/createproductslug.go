package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductSlugPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type CreateProductSlugSecurity struct {
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
