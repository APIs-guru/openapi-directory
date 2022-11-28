import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHealthSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetHealthRequest extends SpeakeasyBase {
    security: GetHealthSecurity;
}
export declare class GetHealthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    health?: shared.Health;
}
