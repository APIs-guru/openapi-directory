import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePlaylistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class CreatePlaylistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createPlaylistDto?: shared.CreatePlaylistDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPlaylistDto1?: shared.CreatePlaylistDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createPlaylistDto2?: shared.CreatePlaylistDto;
}


export class CreatePlaylistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreatePlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreatePlaylistQueryParams;

  @SpeakeasyMetadata()
  request?: CreatePlaylistRequests;

  @SpeakeasyMetadata()
  security: CreatePlaylistSecurity;
}


export class CreatePlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playlistCreationResult?: shared.PlaylistCreationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
