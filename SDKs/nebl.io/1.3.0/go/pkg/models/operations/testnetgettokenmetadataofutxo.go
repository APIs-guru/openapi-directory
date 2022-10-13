package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetTokenMetadataOfUtxoPathParams struct {
	Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
	Utxo    string `pathParam:"style=simple,explode=false,name=utxo"`
}

type TestnetGetTokenMetadataOfUtxoQueryParams struct {
	Verbosity *float64 `queryParam:"style=form,explode=true,name=verbosity"`
}

type TestnetGetTokenMetadataOfUtxoRequest struct {
	PathParams  TestnetGetTokenMetadataOfUtxoPathParams
	QueryParams TestnetGetTokenMetadataOfUtxoQueryParams
}

type TestnetGetTokenMetadataOfUtxoResponse struct {
	ContentType              string
	Error                    *shared.Error
	StatusCode               int64
	GetTokenMetadataResponse *shared.GetTokenMetadataResponse
}
