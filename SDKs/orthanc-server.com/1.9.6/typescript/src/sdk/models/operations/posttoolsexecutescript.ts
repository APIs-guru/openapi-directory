import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsExecuteScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PostToolsExecuteScriptResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
