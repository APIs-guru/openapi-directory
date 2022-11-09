import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdMergePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdMergeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdMergePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdMergeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdMerge200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
