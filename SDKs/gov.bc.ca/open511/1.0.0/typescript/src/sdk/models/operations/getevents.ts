import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEventsEventTypeEnum {
    Construction = "CONSTRUCTION"
,    SpecialEvent = "SPECIAL_EVENT"
,    Incident = "INCIDENT"
,    WeatherCondition = "WEATHER_CONDITION"
,    RoadCondition = "ROAD_CONDITION"
}

export enum GetEventsFormatEnum {
    Json = "json"
,    Xml = "xml"
}

export enum GetEventsStatusEnum {
    All = "ALL"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
}


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=area_id" })
  areaId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: GetEventsEventTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetEventsFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=road_name" })
  roadName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=severity" })
  severity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetEventsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated" })
  updated?: string;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
