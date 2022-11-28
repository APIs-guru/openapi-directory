import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdatedMoviesQueryParams extends SpeakeasyBase {
    imdbId?: string;
    tmdbId?: string;
}
export declare class PostUpdatedMoviesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostUpdatedMoviesRequest extends SpeakeasyBase {
    queryParams: PostUpdatedMoviesQueryParams;
    security: PostUpdatedMoviesSecurity;
}
export declare class PostUpdatedMoviesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
