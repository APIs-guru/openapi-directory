package operations

import (
"openapi/pkg/models/shared")

type MeasurementsGetV1V1MeasurementsGetQueryParams struct {
    City []string `queryParam:"style=form,explode=true,name=city"`
    Coordinates *string `queryParam:"style=form,explode=true,name=coordinates"`
    Country []string `queryParam:"style=form,explode=true,name=country"`
    CountryID *string `queryParam:"style=form,explode=true,name=country_id"`
    DateFrom *interface{} `queryParam:"style=form,explode=true,name=date_from"`
    DateTo *interface{} `queryParam:"style=form,explode=true,name=date_to"`
    Entity *shared.EntityTypesEnum `queryParam:"style=form,explode=true,name=entity"`
    Format *string `queryParam:"style=form,explode=true,name=format"`
    HasGeo *bool `queryParam:"style=form,explode=true,name=has_geo"`
    IncludeFields *string `queryParam:"style=form,explode=true,name=include_fields"`
    IsAnalysis *bool `queryParam:"style=form,explode=true,name=isAnalysis"`
    IsMobile *bool `queryParam:"style=form,explode=true,name=isMobile"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Location []interface{} `queryParam:"style=form,explode=true,name=location"`
    LocationID *int64 `queryParam:"style=form,explode=true,name=location_id"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *shared.MeasOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Parameter []interface{} `queryParam:"style=form,explode=true,name=parameter"`
    ParameterID *int64 `queryParam:"style=form,explode=true,name=parameter_id"`
    Project *int64 `queryParam:"style=form,explode=true,name=project"`
    Radius *int64 `queryParam:"style=form,explode=true,name=radius"`
    SensorType *shared.SensorTypesEnum `queryParam:"style=form,explode=true,name=sensorType"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    Unit []string `queryParam:"style=form,explode=true,name=unit"`
    ValueFrom *float64 `queryParam:"style=form,explode=true,name=value_from"`
    ValueTo *float64 `queryParam:"style=form,explode=true,name=value_to"`
    
}

type MeasurementsGetV1V1MeasurementsGetRequest struct {
    QueryParams MeasurementsGetV1V1MeasurementsGetQueryParams 
    
}

type MeasurementsGetV1V1MeasurementsGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    MeasurementsGetV1V1MeasurementsGet200ApplicationJSONAny *interface{} 
    
}

