import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdOrderedSlicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdOrderedSlicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdOrderedSlicesPathParams;
}


export class GetSeriesIdOrderedSlicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdOrderedSlices200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
