import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRelationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostRelationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
