import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRemoteSubtitlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRemoteSubtitlesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteSubtitlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRemoteSubtitlesPathParams;

  @SpeakeasyMetadata()
  security: GetRemoteSubtitlesSecurity;
}


export class GetRemoteSubtitlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRemoteSubtitles200TextWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
