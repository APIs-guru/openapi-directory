import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThemeVideosPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetThemeVideosQueryParams extends SpeakeasyBase {
    inheritFromParent?: boolean;
    userId?: string;
}
export declare class GetThemeVideosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetThemeVideosRequest extends SpeakeasyBase {
    pathParams: GetThemeVideosPathParams;
    queryParams: GetThemeVideosQueryParams;
    security: GetThemeVideosSecurity;
}
export declare class GetThemeVideosResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    themeMediaResult?: shared.ThemeMediaResult;
}
