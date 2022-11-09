import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdEchoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdEchoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdEchoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdEchoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
