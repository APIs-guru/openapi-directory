import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdModifyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdModifyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdModifyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdModifyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSeriesIdModify200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
