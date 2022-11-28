import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEvidenceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostEvidenceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
