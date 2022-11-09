import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTargetByEnsgidRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostTargetByEnsgidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
