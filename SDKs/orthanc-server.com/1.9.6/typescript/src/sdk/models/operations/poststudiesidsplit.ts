import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdSplitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdSplitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdSplitPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdSplitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdSplit200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
