import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMusicGenrePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genreName" })
  genreName: string;
}


export class GetMusicGenreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetMusicGenreSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMusicGenreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMusicGenrePathParams;

  @Metadata()
  queryParams: GetMusicGenreQueryParams;

  @Metadata()
  security: GetMusicGenreSecurity;
}


export class GetMusicGenreResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDto?: shared.BaseItemDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
