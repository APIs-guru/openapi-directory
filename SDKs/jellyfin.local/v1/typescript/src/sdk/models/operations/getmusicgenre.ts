import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMusicGenrePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genreName" })
  genreName: string;
}


export class GetMusicGenreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetMusicGenreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicGenreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMusicGenrePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMusicGenreQueryParams;

  @SpeakeasyMetadata()
  security: GetMusicGenreSecurity;
}


export class GetMusicGenreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
