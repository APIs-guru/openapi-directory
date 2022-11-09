import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AutoCheckInPathParams extends SpeakeasyBase {
    ticketnumber: string;
}
export declare class AutoCheckInQueryParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class AutoCheckInHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class AutoCheckInSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class AutoCheckInRequest extends SpeakeasyBase {
    pathParams: AutoCheckInPathParams;
    queryParams: AutoCheckInQueryParams;
    headers: AutoCheckInHeaders;
    security: AutoCheckInSecurity;
}
export declare class AutoCheckInResponse extends SpeakeasyBase {
    autoCheckIn200ApplicationJsonString?: string;
    contentType: string;
    statusCode: number;
}
