import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsUnknownSopClassAcceptedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsUnknownSopClassAcceptedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
