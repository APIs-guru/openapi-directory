import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGenrePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genreName" })
  genreName: string;
}


export class GetGenreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetGenreSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetGenreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenrePathParams;

  @Metadata()
  queryParams: GetGenreQueryParams;

  @Metadata()
  security: GetGenreSecurity;
}


export class GetGenreResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDto?: shared.BaseItemDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
