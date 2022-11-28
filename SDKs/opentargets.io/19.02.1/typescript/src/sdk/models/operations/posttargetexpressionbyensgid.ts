import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTargetExpressionByEnsgidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostTargetExpressionByEnsgidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
