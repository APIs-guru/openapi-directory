import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostTargetExpressionByEnsgidRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostTargetExpressionByEnsgidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
