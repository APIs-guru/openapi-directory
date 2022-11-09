import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostEvidenceByIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostEvidenceByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
