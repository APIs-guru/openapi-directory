package operations

import (
"openapi/pkg/models/shared")


type GetCampagneRapportCampagneEnum string

const (
    GetCampagneRapportCampagneEnumOne GetCampagneRapportCampagneEnum = "1"
)


type GetCampagneQueryParams struct {
    DateDeb string `queryParam:"style=form,explode=true,name=date_deb"`
    DateFin string `queryParam:"style=form,explode=true,name=date_fin"`
    Keyid string `queryParam:"style=form,explode=true,name=keyid"`
    RapportCampagne GetCampagneRapportCampagneEnum `queryParam:"style=form,explode=true,name=rapportCampagne"`
    
}

type GetCampagneRequest struct {
    QueryParams GetCampagneQueryParams 
    
}

type GetCampagneResponse struct {
    Body []byte 
    ContentType string 
    Erreur *shared.Erreur 
    StatusCode int64 
    GetCampagne200ApplicationJSONBinaryString []byte 
    GetCampagne200FileBinaryString []byte 
    
}

