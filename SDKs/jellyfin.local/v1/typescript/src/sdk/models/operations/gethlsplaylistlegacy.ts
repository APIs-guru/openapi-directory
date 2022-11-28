import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHlsPlaylistLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class GetHlsPlaylistLegacySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetHlsPlaylistLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHlsPlaylistLegacyPathParams;

  @SpeakeasyMetadata()
  security: GetHlsPlaylistLegacySecurity;
}


export class GetHlsPlaylistLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHlsPlaylistLegacy200ApplicationXMpegurlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
