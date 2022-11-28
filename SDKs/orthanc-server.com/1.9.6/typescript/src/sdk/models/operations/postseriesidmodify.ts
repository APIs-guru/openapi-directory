import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSeriesIdModifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSeriesIdModifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostSeriesIdModifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSeriesIdModify200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
