import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompareStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class CompareStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompareStationPathParams;
}


export class CompareStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
