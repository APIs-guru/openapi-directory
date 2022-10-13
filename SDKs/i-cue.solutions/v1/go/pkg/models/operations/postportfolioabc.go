package operations

import (
	"openapi/pkg/models/shared"
)

type PostPortfolioAbcHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPortfolioAbcRequests struct {
	PortfolioRequest  *shared.PortfolioRequest `request:"mediaType=application/*+json"`
	PortfolioRequest1 *shared.PortfolioRequest `request:"mediaType=application/json"`
	PortfolioRequest2 *shared.PortfolioRequest `request:"mediaType=text/json"`
}

type PostPortfolioAbcRequest struct {
	Headers PostPortfolioAbcHeaders
	Request *PostPortfolioAbcRequests
}

type PostPortfolioAbcResponse struct {
	Body               []byte
	ContentType        string
	PortfolioAbcModels []shared.PortfolioAbcModel
	StatusCode         int64
}
