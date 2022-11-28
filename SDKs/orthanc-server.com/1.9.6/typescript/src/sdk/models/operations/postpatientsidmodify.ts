import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdModifyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdModifyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdModifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPatientsIdModify200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
