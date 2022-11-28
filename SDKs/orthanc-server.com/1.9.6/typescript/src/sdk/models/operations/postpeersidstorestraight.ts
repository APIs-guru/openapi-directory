import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPeersIdStoreStraightPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPeersIdStoreStraightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPeersIdStoreStraightPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/dicom" })
  request?: Uint8Array;
}


export class PostPeersIdStoreStraightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPeersIdStoreStraight200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
