import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetglobaltimeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale: string;
}


export class GetglobaltimeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetglobaltimeQueryParams;
}


export class Getglobaltime200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClockTime" })
  clockTime?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=CurrentDate" })
  currentDate?: string;

  @Metadata({ data: "json, name=CurrentTime" })
  currentTime?: string;

  @Metadata({ data: "json, name=Day" })
  day?: string;

  @Metadata({ data: "json, name=Hour" })
  hour?: string;

  @Metadata({ data: "json, name=Locale" })
  locale?: string;

  @Metadata({ data: "json, name=Minute" })
  minute?: string;

  @Metadata({ data: "json, name=Month" })
  month?: string;

  @Metadata({ data: "json, name=MonthNumber" })
  monthNumber?: string;

  @Metadata({ data: "json, name=Second" })
  second?: string;

  @Metadata({ data: "json, name=TimeStamp" })
  timeStamp?: string;

  @Metadata({ data: "json, name=Weekday" })
  weekday?: string;

  @Metadata({ data: "json, name=Year" })
  year?: string;

  @Metadata({ data: "json, name=Zone" })
  zone?: string;
}


export class GetglobaltimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getglobaltime200ApplicationJsonObject?: Getglobaltime200ApplicationJson;
}
