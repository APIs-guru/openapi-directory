import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPeersIdStoreStraightPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPeersIdStoreStraightRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPeersIdStoreStraightPathParams;

  @Metadata({ data: "request, media_type=application/dicom" })
  request?: Uint8Array;
}


export class PostPeersIdStoreStraightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPeersIdStoreStraight200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
