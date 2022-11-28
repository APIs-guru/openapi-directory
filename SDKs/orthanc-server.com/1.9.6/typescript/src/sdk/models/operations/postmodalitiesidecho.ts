import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdEchoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdEchoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdEchoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdEchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
