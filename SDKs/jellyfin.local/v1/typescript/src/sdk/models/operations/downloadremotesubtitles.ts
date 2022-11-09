import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadRemoteSubtitlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subtitleId" })
  subtitleId: string;
}


export class DownloadRemoteSubtitlesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DownloadRemoteSubtitlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadRemoteSubtitlesPathParams;

  @Metadata()
  security: DownloadRemoteSubtitlesSecurity;
}


export class DownloadRemoteSubtitlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
