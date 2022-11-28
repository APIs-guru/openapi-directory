import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCuratedPodcastsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCuratedPodcastsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetCuratedPodcastsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCuratedPodcastsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCuratedPodcastsHeaders;
}


export class GetCuratedPodcastsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCuratedPodcastsResponse?: shared.GetCuratedPodcastsResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
