import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFallbackFontPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetFallbackFontSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetFallbackFontRequest extends SpeakeasyBase {
    pathParams: GetFallbackFontPathParams;
    security: GetFallbackFontSecurity;
}
export declare class GetFallbackFontResponse extends SpeakeasyBase {
    contentType: string;
    getFallbackFont200FontWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
