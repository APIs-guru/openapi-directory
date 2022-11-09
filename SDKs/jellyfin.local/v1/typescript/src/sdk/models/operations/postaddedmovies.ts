import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAddedMoviesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imdbId" })
  imdbId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tmdbId" })
  tmdbId?: string;
}


export class PostAddedMoviesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostAddedMoviesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAddedMoviesQueryParams;

  @Metadata()
  security: PostAddedMoviesSecurity;
}


export class PostAddedMoviesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
