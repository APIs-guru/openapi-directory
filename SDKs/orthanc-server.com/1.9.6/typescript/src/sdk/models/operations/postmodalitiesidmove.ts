import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdMovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdMoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdMovePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdMoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
