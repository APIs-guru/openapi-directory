import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPodcastsInBatchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetPodcastsInBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPodcastsInBatchHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: shared.GetPodcastsInBatchForm;
}


export class GetPodcastsInBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPodcastsInBatchResponse?: shared.GetPodcastsInBatchResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
