import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadRemoteSubtitlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subtitleId" })
  subtitleId: string;
}


export class DownloadRemoteSubtitlesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DownloadRemoteSubtitlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadRemoteSubtitlesPathParams;

  @SpeakeasyMetadata()
  security: DownloadRemoteSubtitlesSecurity;
}


export class DownloadRemoteSubtitlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
