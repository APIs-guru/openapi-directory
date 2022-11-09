import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteSubtitlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetRemoteSubtitlesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteSubtitlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRemoteSubtitlesPathParams;

  @Metadata()
  security: GetRemoteSubtitlesSecurity;
}


export class GetRemoteSubtitlesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRemoteSubtitles200TextWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
