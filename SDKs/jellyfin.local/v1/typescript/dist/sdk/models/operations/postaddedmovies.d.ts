import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAddedMoviesQueryParams extends SpeakeasyBase {
    imdbId?: string;
    tmdbId?: string;
}
export declare class PostAddedMoviesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostAddedMoviesRequest extends SpeakeasyBase {
    queryParams: PostAddedMoviesQueryParams;
    security: PostAddedMoviesSecurity;
}
export declare class PostAddedMoviesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
