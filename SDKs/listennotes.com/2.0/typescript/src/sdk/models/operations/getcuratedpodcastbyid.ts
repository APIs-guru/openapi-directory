import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCuratedPodcastByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCuratedPodcastByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetCuratedPodcastByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCuratedPodcastByIdPathParams;

  @SpeakeasyMetadata()
  headers: GetCuratedPodcastByIdHeaders;
}


export class GetCuratedPodcastByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  curatedListFull?: shared.CuratedListFull;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
