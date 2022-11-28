import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEventsEventTypeEnum {
    Construction = "CONSTRUCTION",
    SpecialEvent = "SPECIAL_EVENT",
    Incident = "INCIDENT",
    WeatherCondition = "WEATHER_CONDITION",
    RoadCondition = "ROAD_CONDITION"
}

export enum GetEventsFormatEnum {
    Json = "json",
    Xml = "xml"
}

export enum GetEventsStatusEnum {
    All = "ALL",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}


export class GetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area_id" })
  areaId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" })
  eventType?: GetEventsEventTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetEventsFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=road_name" })
  roadName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetEventsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated" })
  updated?: string;
}


export class GetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
