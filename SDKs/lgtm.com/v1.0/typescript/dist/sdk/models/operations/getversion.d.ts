import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVersionSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetVersionRequest extends SpeakeasyBase {
    security: GetVersionSecurity;
}
export declare class GetVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
