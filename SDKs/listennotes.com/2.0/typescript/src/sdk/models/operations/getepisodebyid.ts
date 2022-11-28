import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodeByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodeByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=show_transcript" })
  showTranscript?: number;
}


export class GetEpisodeByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetEpisodeByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodeByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodeByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetEpisodeByIdHeaders;
}


export class GetEpisodeByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodeFull?: shared.EpisodeFull;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
