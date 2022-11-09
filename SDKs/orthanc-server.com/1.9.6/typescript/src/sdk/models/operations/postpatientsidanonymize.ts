import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdAnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdAnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdAnonymizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdAnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPatientsIdAnonymize200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
