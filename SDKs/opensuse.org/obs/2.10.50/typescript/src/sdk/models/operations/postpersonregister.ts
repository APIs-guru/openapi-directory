import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPersonRegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;
}


export class PostPersonRegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
