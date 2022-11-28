import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompareStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stationName" })
  stationName: string;
}


export class CompareStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompareStationPathParams;
}


export class CompareStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
