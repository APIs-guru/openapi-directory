package operations




type GetEventsEventTypeEnum string

const (
    GetEventsEventTypeEnumConstruction GetEventsEventTypeEnum = "CONSTRUCTION"
GetEventsEventTypeEnumSpecialEvent GetEventsEventTypeEnum = "SPECIAL_EVENT"
GetEventsEventTypeEnumIncident GetEventsEventTypeEnum = "INCIDENT"
GetEventsEventTypeEnumWeatherCondition GetEventsEventTypeEnum = "WEATHER_CONDITION"
GetEventsEventTypeEnumRoadCondition GetEventsEventTypeEnum = "ROAD_CONDITION"
)



type GetEventsFormatEnum string

const (
    GetEventsFormatEnumJSON GetEventsFormatEnum = "json"
GetEventsFormatEnumXML GetEventsFormatEnum = "xml"
)



type GetEventsStatusEnum string

const (
    GetEventsStatusEnumAll GetEventsStatusEnum = "ALL"
GetEventsStatusEnumActive GetEventsStatusEnum = "ACTIVE"
GetEventsStatusEnumArchived GetEventsStatusEnum = "ARCHIVED"
)


type GetEventsQueryParams struct {
    AreaID *string `queryParam:"style=form,explode=true,name=area_id"`
    Bbox *string `queryParam:"style=form,explode=true,name=bbox"`
    Created *string `queryParam:"style=form,explode=true,name=created"`
    EventType *GetEventsEventTypeEnum `queryParam:"style=form,explode=true,name=event_type"`
    Format *GetEventsFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Jurisdiction *string `queryParam:"style=form,explode=true,name=jurisdiction"`
    RoadName *string `queryParam:"style=form,explode=true,name=road_name"`
    Severity *string `queryParam:"style=form,explode=true,name=severity"`
    Status *GetEventsStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Updated *string `queryParam:"style=form,explode=true,name=updated"`
    
}

type GetEventsRequest struct {
    QueryParams GetEventsQueryParams 
    
}

type GetEventsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

