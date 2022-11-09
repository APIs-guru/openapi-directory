import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdArchivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postStudiesIdArchive200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
