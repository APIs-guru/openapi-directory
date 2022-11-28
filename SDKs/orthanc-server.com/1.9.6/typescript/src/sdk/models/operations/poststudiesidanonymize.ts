import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdAnonymizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdAnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdAnonymizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdAnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postStudiesIdAnonymize200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
