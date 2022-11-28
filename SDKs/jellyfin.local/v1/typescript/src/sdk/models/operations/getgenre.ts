import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGenrePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genreName" })
  genreName: string;
}


export class GetGenreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetGenreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetGenreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenrePathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenreQueryParams;

  @SpeakeasyMetadata()
  security: GetGenreSecurity;
}


export class GetGenreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
