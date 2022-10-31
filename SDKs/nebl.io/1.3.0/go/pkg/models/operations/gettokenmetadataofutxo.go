package operations

import (
"openapi/pkg/models/shared")

type GetTokenMetadataOfUtxoPathParams struct {
    Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
    Utxo string `pathParam:"style=simple,explode=false,name=utxo"`
    
}

type GetTokenMetadataOfUtxoQueryParams struct {
    Verbosity *float64 `queryParam:"style=form,explode=true,name=verbosity"`
    
}

type GetTokenMetadataOfUtxoRequest struct {
    PathParams GetTokenMetadataOfUtxoPathParams 
    QueryParams GetTokenMetadataOfUtxoQueryParams 
    
}

type GetTokenMetadataOfUtxoResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    GetTokenMetadataResponse *shared.GetTokenMetadataResponse 
    
}

