import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutToolsAcceptedTransferSyntaxesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  any?: any;

  @Metadata({ data: "request, media_type=text/plain" })
  textPlain: Uint8Array;
}


export class PutToolsAcceptedTransferSyntaxesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PutToolsAcceptedTransferSyntaxesRequests;
}


export class PutToolsAcceptedTransferSyntaxesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putToolsAcceptedTransferSyntaxes200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
