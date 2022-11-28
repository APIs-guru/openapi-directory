import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubtitlePlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;
}


export class GetSubtitlePlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentLength" })
  segmentLength: number;
}


export class GetSubtitlePlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSubtitlePlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubtitlePlaylistPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubtitlePlaylistQueryParams;

  @SpeakeasyMetadata()
  security: GetSubtitlePlaylistSecurity;
}


export class GetSubtitlePlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubtitlePlaylist200ApplicationXMpegurlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
