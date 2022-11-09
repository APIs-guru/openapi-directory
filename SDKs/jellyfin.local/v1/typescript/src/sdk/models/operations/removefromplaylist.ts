import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFromPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=playlistId" })
  playlistId: string;
}


export class RemoveFromPlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entryIds" })
  entryIds?: string[];
}


export class RemoveFromPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveFromPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveFromPlaylistPathParams;

  @Metadata()
  queryParams: RemoveFromPlaylistQueryParams;

  @Metadata()
  security: RemoveFromPlaylistSecurity;
}


export class RemoveFromPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
