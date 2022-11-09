import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdModifyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdModifyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdModifyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdModifyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdModify200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
