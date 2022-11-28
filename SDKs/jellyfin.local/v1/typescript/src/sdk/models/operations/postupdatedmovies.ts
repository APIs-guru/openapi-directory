import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUpdatedMoviesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imdbId" })
  imdbId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tmdbId" })
  tmdbId?: string;
}


export class PostUpdatedMoviesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedMoviesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUpdatedMoviesQueryParams;

  @SpeakeasyMetadata()
  security: PostUpdatedMoviesSecurity;
}


export class PostUpdatedMoviesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
