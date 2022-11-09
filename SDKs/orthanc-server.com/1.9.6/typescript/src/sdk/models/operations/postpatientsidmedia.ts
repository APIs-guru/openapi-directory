import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdMediaPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postPatientsIdMedia200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
