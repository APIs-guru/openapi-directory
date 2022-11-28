import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetForecastPointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=yatchclubid" })
  yatchclubid: string;
}


export class GetForecastPointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetForecastPointsPathParams;
}


export class GetForecastPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
