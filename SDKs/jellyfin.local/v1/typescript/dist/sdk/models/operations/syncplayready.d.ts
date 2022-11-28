import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayReadyRequests extends SpeakeasyBase {
    readyRequestDto?: shared.ReadyRequestDto;
    readyRequestDto1?: shared.ReadyRequestDto;
    readyRequestDto2?: shared.ReadyRequestDto;
}
export declare class SyncPlayReadySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayReadyRequest extends SpeakeasyBase {
    request: SyncPlayReadyRequests;
    security: SyncPlayReadySecurity;
}
export declare class SyncPlayReadyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
