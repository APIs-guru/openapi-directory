package operations



type LandlordControllerCreateMaintenancePreferencePathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type LandlordControllerCreateMaintenancePreferenceQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=name"`
    Notes string `queryParam:"style=form,explode=true,name=notes"`
    TenancyID string `queryParam:"style=form,explode=true,name=tenancyID"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type LandlordControllerCreateMaintenancePreferenceRequest struct {
    PathParams LandlordControllerCreateMaintenancePreferencePathParams 
    QueryParams LandlordControllerCreateMaintenancePreferenceQueryParams 
    
}

type LandlordControllerCreateMaintenancePreferenceResponse struct {
    ContentType string 
    LandlordControllerCreateMaintenancePreference200ApplicationJSONString *string 
    LandlordControllerCreateMaintenancePreference200ApplicationXMLString *string 
    LandlordControllerCreateMaintenancePreference200TextJSONString *string 
    LandlordControllerCreateMaintenancePreference200TextXMLString *string 
    StatusCode int64 
    
}

