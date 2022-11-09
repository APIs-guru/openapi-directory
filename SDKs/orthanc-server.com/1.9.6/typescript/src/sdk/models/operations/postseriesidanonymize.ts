import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdAnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdAnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdAnonymizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSeriesIdAnonymize200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
