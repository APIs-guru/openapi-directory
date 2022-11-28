import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetglobaltimeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale: string;
}


export class Getglobaltime200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClockTime" })
  clockTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentDate" })
  currentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentTime" })
  currentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Day" })
  day?: string;

  @SpeakeasyMetadata({ data: "json, name=Hour" })
  hour?: string;

  @SpeakeasyMetadata({ data: "json, name=Locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=Minute" })
  minute?: string;

  @SpeakeasyMetadata({ data: "json, name=Month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=MonthNumber" })
  monthNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Second" })
  second?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeStamp" })
  timeStamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Weekday" })
  weekday?: string;

  @SpeakeasyMetadata({ data: "json, name=Year" })
  year?: string;

  @SpeakeasyMetadata({ data: "json, name=Zone" })
  zone?: string;
}


export class GetglobaltimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetglobaltimeQueryParams;
}


export class GetglobaltimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getglobaltime200ApplicationJsonObject?: Getglobaltime200ApplicationJson;
}
