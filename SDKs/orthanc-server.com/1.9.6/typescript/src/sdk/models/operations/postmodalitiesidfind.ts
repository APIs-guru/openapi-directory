import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdFindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdFindPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdFind200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
