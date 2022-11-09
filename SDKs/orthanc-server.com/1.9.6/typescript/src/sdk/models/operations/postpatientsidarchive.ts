import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdArchivePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postPatientsIdArchive200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
