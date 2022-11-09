import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostModalitiesIdFindInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdFindInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostModalitiesIdFindInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostModalitiesIdFindInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postModalitiesIdFindInstance200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
