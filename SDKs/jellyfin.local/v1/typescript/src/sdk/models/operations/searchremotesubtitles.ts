import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchRemoteSubtitlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;
}


export class SearchRemoteSubtitlesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isPerfectMatch" })
  isPerfectMatch?: boolean;
}


export class SearchRemoteSubtitlesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SearchRemoteSubtitlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchRemoteSubtitlesPathParams;

  @Metadata()
  queryParams: SearchRemoteSubtitlesQueryParams;

  @Metadata()
  security: SearchRemoteSubtitlesSecurity;
}


export class SearchRemoteSubtitlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RemoteSubtitleInfo })
  remoteSubtitleInfos?: shared.RemoteSubtitleInfo[];

  @Metadata()
  statusCode: number;
}
