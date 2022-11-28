import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSimilarMoviesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetSimilarMoviesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" })
  excludeArtistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetSimilarMoviesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSimilarMoviesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSimilarMoviesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSimilarMoviesQueryParams;

  @SpeakeasyMetadata()
  security: GetSimilarMoviesSecurity;
}


export class GetSimilarMoviesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
