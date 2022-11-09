import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdAnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdAnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdAnonymizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdAnonymize200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
