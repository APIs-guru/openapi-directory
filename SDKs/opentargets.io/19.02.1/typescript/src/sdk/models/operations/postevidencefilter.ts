import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEvidenceFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostEvidenceFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
