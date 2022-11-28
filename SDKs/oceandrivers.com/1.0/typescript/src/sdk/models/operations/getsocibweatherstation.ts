import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSocibWeatherStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetSocibWeatherStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSocibWeatherStationPathParams;
}


export class GetSocibWeatherStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
