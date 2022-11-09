import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostEvidenceFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostEvidenceFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
