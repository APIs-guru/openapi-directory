import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubtitlePlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;
}


export class GetSubtitlePlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=segmentLength" })
  segmentLength: number;
}


export class GetSubtitlePlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSubtitlePlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubtitlePlaylistPathParams;

  @Metadata()
  queryParams: GetSubtitlePlaylistQueryParams;

  @Metadata()
  security: GetSubtitlePlaylistSecurity;
}


export class GetSubtitlePlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSubtitlePlaylist200ApplicationXMpegurlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
