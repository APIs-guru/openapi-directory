import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitPodcastHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class SubmitPodcastRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubmitPodcastHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.SubmitPodcastForm;
}


export class SubmitPodcastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitPodcastResponse?: shared.SubmitPodcastResponse;
}
