package operations

import (
	"openapi/pkg/models/shared"
)

type PostPortfolioHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPortfolioRequests struct {
	PortfolioRequest  *shared.PortfolioRequest `request:"mediaType=application/*+json"`
	PortfolioRequest1 *shared.PortfolioRequest `request:"mediaType=application/json"`
	PortfolioRequest2 *shared.PortfolioRequest `request:"mediaType=text/json"`
}

type PostPortfolioRequest struct {
	Headers PostPortfolioHeaders
	Request *PostPortfolioRequests
}

type PostPortfolioResponse struct {
	Body            []byte
	ContentType     string
	PortfolioModels []shared.PortfolioModel
	StatusCode      int64
}
