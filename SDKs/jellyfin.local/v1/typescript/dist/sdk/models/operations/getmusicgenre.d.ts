import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMusicGenrePathParams extends SpeakeasyBase {
    genreName: string;
}
export declare class GetMusicGenreQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetMusicGenreSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMusicGenreRequest extends SpeakeasyBase {
    pathParams: GetMusicGenrePathParams;
    queryParams: GetMusicGenreQueryParams;
    security: GetMusicGenreSecurity;
}
export declare class GetMusicGenreResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
