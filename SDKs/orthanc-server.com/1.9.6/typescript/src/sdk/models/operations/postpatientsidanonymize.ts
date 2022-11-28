import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdAnonymizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdAnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdAnonymizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdAnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPatientsIdAnonymize200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
