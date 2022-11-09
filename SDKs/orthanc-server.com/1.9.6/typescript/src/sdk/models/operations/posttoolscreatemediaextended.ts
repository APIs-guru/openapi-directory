import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsCreateMediaExtendedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateMediaExtendedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postToolsCreateMediaExtended200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
