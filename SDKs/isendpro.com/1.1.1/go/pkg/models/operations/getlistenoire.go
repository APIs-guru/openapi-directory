package operations

import (
"openapi/pkg/models/shared")


type GetListeNoireGetListeNoireEnum string

const (
    GetListeNoireGetListeNoireEnumOne GetListeNoireGetListeNoireEnum = "1"
)


type GetListeNoireQueryParams struct {
    GetListeNoire GetListeNoireGetListeNoireEnum `queryParam:"style=form,explode=true,name=getListeNoire"`
    Keyid string `queryParam:"style=form,explode=true,name=keyid"`
    
}

type GetListeNoireRequest struct {
    QueryParams GetListeNoireQueryParams 
    
}

type GetListeNoireResponse struct {
    ContentType string 
    Erreur *shared.Erreur 
    StatusCode int64 
    GetListeNoire200ApplicationJSONBinaryString []byte 
    
}

