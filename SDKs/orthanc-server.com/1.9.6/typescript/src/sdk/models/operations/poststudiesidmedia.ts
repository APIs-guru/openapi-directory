import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdMediaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postStudiesIdMedia200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
