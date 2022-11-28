import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdMediaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSeriesIdMedia200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
