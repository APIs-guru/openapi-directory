import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSystemInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSystemInfoRequest extends SpeakeasyBase {
    security: GetSystemInfoSecurity;
}
export declare class GetSystemInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    systemInfo?: shared.SystemInfo;
}
