import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEventsEventTypeEnum {
    Construction = "CONSTRUCTION",
    SpecialEvent = "SPECIAL_EVENT",
    Incident = "INCIDENT",
    WeatherCondition = "WEATHER_CONDITION",
    RoadCondition = "ROAD_CONDITION"
}
export declare enum GetEventsFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare enum GetEventsStatusEnum {
    All = "ALL",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class GetEventsQueryParams extends SpeakeasyBase {
    areaId?: string;
    bbox?: string;
    created?: string;
    eventType?: GetEventsEventTypeEnum;
    format?: GetEventsFormatEnum;
    jurisdiction?: string;
    roadName?: string;
    severity?: string;
    status?: GetEventsStatusEnum;
    updated?: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
