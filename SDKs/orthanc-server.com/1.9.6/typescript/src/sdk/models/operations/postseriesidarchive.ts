import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdArchivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postSeriesIdArchive200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
