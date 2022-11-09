import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdMediaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdMedia200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
