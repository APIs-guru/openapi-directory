import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdArchivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSeriesIdArchive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
