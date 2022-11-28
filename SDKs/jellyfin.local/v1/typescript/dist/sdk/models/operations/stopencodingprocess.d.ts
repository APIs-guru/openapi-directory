import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopEncodingProcessQueryParams extends SpeakeasyBase {
    deviceId?: string;
    playSessionId?: string;
}
export declare class StopEncodingProcessSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class StopEncodingProcessRequest extends SpeakeasyBase {
    queryParams: StopEncodingProcessQueryParams;
    security: StopEncodingProcessSecurity;
}
export declare class StopEncodingProcessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
