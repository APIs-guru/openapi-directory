import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchRemoteSubtitlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;
}


export class SearchRemoteSubtitlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPerfectMatch" })
  isPerfectMatch?: boolean;
}


export class SearchRemoteSubtitlesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SearchRemoteSubtitlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchRemoteSubtitlesPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchRemoteSubtitlesQueryParams;

  @SpeakeasyMetadata()
  security: SearchRemoteSubtitlesSecurity;
}


export class SearchRemoteSubtitlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RemoteSubtitleInfo })
  remoteSubtitleInfos?: shared.RemoteSubtitleInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
