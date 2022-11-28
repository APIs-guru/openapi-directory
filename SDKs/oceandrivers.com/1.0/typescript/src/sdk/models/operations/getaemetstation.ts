import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAemetStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetAemetStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAemetStationPathParams;
}


export class GetAemetStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
