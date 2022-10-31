package operations

import (
	"openapi/pkg/models/shared"
)

type PostAdministrationEntityHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostAdministrationEntityRequests struct {
	NewEntityRequest  *shared.NewEntityRequest `request:"mediaType=application/*+json"`
	NewEntityRequest1 *shared.NewEntityRequest `request:"mediaType=application/json"`
	NewEntityRequest2 *shared.NewEntityRequest `request:"mediaType=text/json"`
}

type PostAdministrationEntityRequest struct {
	Headers PostAdministrationEntityHeaders
	Request *PostAdministrationEntityRequests
}

type PostAdministrationEntityResponse struct {
	ContentType                                          string
	PostAdministrationEntity200ApplicationJSONUUIDString *string
	PostAdministrationEntity200TextJSONUUIDString        *string
	PostAdministrationEntity200TextPlainUUIDString       *string
	StatusCode                                           int64
}
