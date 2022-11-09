import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdatedMoviesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imdbId" })
  imdbId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tmdbId" })
  tmdbId?: string;
}


export class PostUpdatedMoviesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUpdatedMoviesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdatedMoviesQueryParams;

  @Metadata()
  security: PostUpdatedMoviesSecurity;
}


export class PostUpdatedMoviesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
