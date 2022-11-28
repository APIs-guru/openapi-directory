import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsDicomEchoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsDicomEchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
