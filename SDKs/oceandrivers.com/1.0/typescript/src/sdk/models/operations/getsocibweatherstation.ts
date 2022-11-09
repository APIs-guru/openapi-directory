import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSocibWeatherStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetSocibWeatherStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSocibWeatherStationPathParams;
}


export class GetSocibWeatherStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
