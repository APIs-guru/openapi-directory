import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBestHitSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: string;
}


export class PostBestHitSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
