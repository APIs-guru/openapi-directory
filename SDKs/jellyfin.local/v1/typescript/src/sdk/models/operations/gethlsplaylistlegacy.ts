import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHlsPlaylistLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class GetHlsPlaylistLegacySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetHlsPlaylistLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHlsPlaylistLegacyPathParams;

  @Metadata()
  security: GetHlsPlaylistLegacySecurity;
}


export class GetHlsPlaylistLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getHlsPlaylistLegacy200ApplicationXMpegurlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
