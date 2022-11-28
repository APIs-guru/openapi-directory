import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostTargetByEnsgidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostTargetByEnsgidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
