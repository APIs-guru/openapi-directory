import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsDicomEchoRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsDicomEchoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
