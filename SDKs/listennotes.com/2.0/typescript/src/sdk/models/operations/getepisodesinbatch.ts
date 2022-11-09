import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodesInBatchHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetEpisodesInBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEpisodesInBatchHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.GetEpisodesInBatchForm;
}


export class GetEpisodesInBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEpisodesInBatchResponse?: shared.GetEpisodesInBatchResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
