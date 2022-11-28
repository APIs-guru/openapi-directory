import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThemeMediaPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetThemeMediaQueryParams extends SpeakeasyBase {
    inheritFromParent?: boolean;
    userId?: string;
}
export declare class GetThemeMediaSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetThemeMediaRequest extends SpeakeasyBase {
    pathParams: GetThemeMediaPathParams;
    queryParams: GetThemeMediaQueryParams;
    security: GetThemeMediaSecurity;
}
export declare class GetThemeMediaResponse extends SpeakeasyBase {
    allThemeMediaResult?: shared.AllThemeMediaResult;
    contentType: string;
    statusCode: number;
}
