import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAemetStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class GetAemetStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAemetStationPathParams;
}


export class GetAemetStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
