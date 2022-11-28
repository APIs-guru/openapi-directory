import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenrePathParams extends SpeakeasyBase {
    genreName: string;
}
export declare class GetGenreQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetGenreSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetGenreRequest extends SpeakeasyBase {
    pathParams: GetGenrePathParams;
    queryParams: GetGenreQueryParams;
    security: GetGenreSecurity;
}
export declare class GetGenreResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
