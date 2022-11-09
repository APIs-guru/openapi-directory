import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutToolsLogLevelJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PutToolsLogLevelJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
