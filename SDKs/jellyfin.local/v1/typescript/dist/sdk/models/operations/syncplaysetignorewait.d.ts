import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySetIgnoreWaitRequests extends SpeakeasyBase {
    ignoreWaitRequestDto?: shared.IgnoreWaitRequestDto;
    ignoreWaitRequestDto1?: shared.IgnoreWaitRequestDto;
    ignoreWaitRequestDto2?: shared.IgnoreWaitRequestDto;
}
export declare class SyncPlaySetIgnoreWaitSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySetIgnoreWaitRequest extends SpeakeasyBase {
    request: SyncPlaySetIgnoreWaitRequests;
    security: SyncPlaySetIgnoreWaitSecurity;
}
export declare class SyncPlaySetIgnoreWaitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
