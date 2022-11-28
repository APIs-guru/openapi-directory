import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutToolsAcceptedTransferSyntaxesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PutToolsAcceptedTransferSyntaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PutToolsAcceptedTransferSyntaxesRequests;
}


export class PutToolsAcceptedTransferSyntaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putToolsAcceptedTransferSyntaxes200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
