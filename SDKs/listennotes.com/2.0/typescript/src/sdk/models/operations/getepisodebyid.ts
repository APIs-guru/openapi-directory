import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodeByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodeByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=show_transcript" })
  showTranscript?: number;
}


export class GetEpisodeByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetEpisodeByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEpisodeByIdPathParams;

  @Metadata()
  queryParams: GetEpisodeByIdQueryParams;

  @Metadata()
  headers: GetEpisodeByIdHeaders;
}


export class GetEpisodeByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodeFull?: shared.EpisodeFull;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
