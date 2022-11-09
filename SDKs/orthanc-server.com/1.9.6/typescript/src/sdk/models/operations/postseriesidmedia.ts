import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdMediaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postSeriesIdMedia200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
