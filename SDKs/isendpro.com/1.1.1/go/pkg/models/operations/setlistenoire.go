package operations

import (
"openapi/pkg/models/shared")


type SetListeNoireSetlisteNoireEnum string

const (
    SetListeNoireSetlisteNoireEnumOne SetListeNoireSetlisteNoireEnum = "1"
)


type SetListeNoireQueryParams struct {
    Keyid string `queryParam:"style=form,explode=true,name=keyid"`
    Num string `queryParam:"style=form,explode=true,name=num"`
    SetlisteNoire SetListeNoireSetlisteNoireEnum `queryParam:"style=form,explode=true,name=setlisteNoire"`
    
}

type SetListeNoireRequest struct {
    QueryParams SetListeNoireQueryParams 
    
}

type SetListeNoireResponse struct {
    ContentType string 
    Erreur *shared.Erreur 
    ListenoireReponse *shared.ListenoireReponse 
    StatusCode int64 
    
}

