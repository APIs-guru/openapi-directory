import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdOrderedSlicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdOrderedSlicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdOrderedSlicesPathParams;
}


export class GetSeriesIdOrderedSlicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdOrderedSlices200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
