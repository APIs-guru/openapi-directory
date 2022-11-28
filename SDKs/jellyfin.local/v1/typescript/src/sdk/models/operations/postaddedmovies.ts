import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAddedMoviesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imdbId" })
  imdbId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tmdbId" })
  tmdbId?: string;
}


export class PostAddedMoviesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostAddedMoviesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAddedMoviesQueryParams;

  @SpeakeasyMetadata()
  security: PostAddedMoviesSecurity;
}


export class PostAddedMoviesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
