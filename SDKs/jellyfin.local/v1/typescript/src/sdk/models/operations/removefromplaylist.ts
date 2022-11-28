import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFromPlaylistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class RemoveFromPlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryIds" })
  entryIds?: string[];
}


export class RemoveFromPlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveFromPlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFromPlaylistPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveFromPlaylistQueryParams;

  @SpeakeasyMetadata()
  security: RemoveFromPlaylistSecurity;
}


export class RemoveFromPlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
