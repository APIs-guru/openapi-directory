package operations

import (
"openapi/pkg/models/shared")

type Locationsv1GetV1LocationsLocationIDGetPathParams struct {
    LocationID int64 `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type Locationsv1GetV1LocationsLocationIDGetQueryParams struct {
    City []string `queryParam:"style=form,explode=true,name=city"`
    Coordinates *string `queryParam:"style=form,explode=true,name=coordinates"`
    Country []string `queryParam:"style=form,explode=true,name=country"`
    CountryID *string `queryParam:"style=form,explode=true,name=country_id"`
    DumpRaw *bool `queryParam:"style=form,explode=true,name=dumpRaw"`
    Entity *shared.EntityTypesEnum `queryParam:"style=form,explode=true,name=entity"`
    HasGeo *bool `queryParam:"style=form,explode=true,name=has_geo"`
    IsAnalysis *bool `queryParam:"style=form,explode=true,name=isAnalysis"`
    IsMobile *bool `queryParam:"style=form,explode=true,name=isMobile"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Location []interface{} `queryParam:"style=form,explode=true,name=location"`
    ManufacturerName []string `queryParam:"style=form,explode=true,name=manufacturerName"`
    ModelName []string `queryParam:"style=form,explode=true,name=modelName"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *shared.LocationsOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Parameter []interface{} `queryParam:"style=form,explode=true,name=parameter"`
    ParameterID *int64 `queryParam:"style=form,explode=true,name=parameter_id"`
    Radius *int64 `queryParam:"style=form,explode=true,name=radius"`
    SensorType *shared.SensorTypesEnum `queryParam:"style=form,explode=true,name=sensorType"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    SourceName []string `queryParam:"style=form,explode=true,name=sourceName"`
    Unit []string `queryParam:"style=form,explode=true,name=unit"`
    
}

type Locationsv1GetV1LocationsLocationIDGetRequest struct {
    PathParams Locationsv1GetV1LocationsLocationIDGetPathParams 
    QueryParams Locationsv1GetV1LocationsLocationIDGetQueryParams 
    
}

type Locationsv1GetV1LocationsLocationIDGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    OpenAqResult *shared.OpenAqResult 
    StatusCode int64 
    
}

