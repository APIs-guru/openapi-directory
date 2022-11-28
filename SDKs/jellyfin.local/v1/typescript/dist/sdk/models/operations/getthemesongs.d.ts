import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThemeSongsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetThemeSongsQueryParams extends SpeakeasyBase {
    inheritFromParent?: boolean;
    userId?: string;
}
export declare class GetThemeSongsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetThemeSongsRequest extends SpeakeasyBase {
    pathParams: GetThemeSongsPathParams;
    queryParams: GetThemeSongsQueryParams;
    security: GetThemeSongsSecurity;
}
export declare class GetThemeSongsResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    themeMediaResult?: shared.ThemeMediaResult;
}
