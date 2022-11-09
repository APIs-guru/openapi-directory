import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCuratedPodcastByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCuratedPodcastByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetCuratedPodcastByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCuratedPodcastByIdPathParams;

  @Metadata()
  headers: GetCuratedPodcastByIdHeaders;
}


export class GetCuratedPodcastByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  curatedListFull?: shared.CuratedListFull;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
