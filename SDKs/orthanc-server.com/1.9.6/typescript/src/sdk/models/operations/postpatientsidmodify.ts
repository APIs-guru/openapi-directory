import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPatientsIdModifyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdModifyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPatientsIdModifyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdModifyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPatientsIdModify200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
