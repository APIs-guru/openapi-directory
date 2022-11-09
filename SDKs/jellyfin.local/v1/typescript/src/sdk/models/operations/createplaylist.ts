import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class CreatePlaylistRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createPlaylistDto?: shared.CreatePlaylistDto;

  @Metadata({ data: "request, media_type=application/json" })
  createPlaylistDto1?: shared.CreatePlaylistDto;

  @Metadata({ data: "request, media_type=text/json" })
  createPlaylistDto2?: shared.CreatePlaylistDto;
}


export class CreatePlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreatePlaylistRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreatePlaylistQueryParams;

  @Metadata()
  request?: CreatePlaylistRequests;

  @Metadata()
  security: CreatePlaylistSecurity;
}


export class CreatePlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playlistCreationResult?: shared.PlaylistCreationResult;

  @Metadata()
  statusCode: number;
}
