import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostModalitiesIdStoreStraightPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostModalitiesIdStoreStraightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostModalitiesIdStoreStraightPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/dicom" })
  request?: Uint8Array;
}


export class PostModalitiesIdStoreStraightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postModalitiesIdStoreStraight200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
