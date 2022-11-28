import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFallbackFontListSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetFallbackFontListRequest extends SpeakeasyBase {
    security: GetFallbackFontListSecurity;
}
export declare class GetFallbackFontListResponse extends SpeakeasyBase {
    contentType: string;
    fontFiles?: shared.FontFile[];
    statusCode: number;
}
