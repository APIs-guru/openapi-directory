package operations

import (
"openapi/pkg/models/shared")


type DelListeNoireDelListeNoireEnum string

const (
    DelListeNoireDelListeNoireEnumOne DelListeNoireDelListeNoireEnum = "1"
)


type DelListeNoireQueryParams struct {
    DelListeNoire DelListeNoireDelListeNoireEnum `queryParam:"style=form,explode=true,name=delListeNoire"`
    Keyid string `queryParam:"style=form,explode=true,name=keyid"`
    Num string `queryParam:"style=form,explode=true,name=num"`
    
}

type DelListeNoireRequest struct {
    QueryParams DelListeNoireQueryParams 
    
}

type DelListeNoireResponse struct {
    ContentType string 
    Erreur *shared.Erreur 
    ListenoireReponse *shared.ListenoireReponse 
    StatusCode int64 
    
}

