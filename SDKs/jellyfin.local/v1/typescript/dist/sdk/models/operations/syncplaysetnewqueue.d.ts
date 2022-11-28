import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySetNewQueueRequests extends SpeakeasyBase {
    playRequestDto?: shared.PlayRequestDto;
    playRequestDto1?: shared.PlayRequestDto;
    playRequestDto2?: shared.PlayRequestDto;
}
export declare class SyncPlaySetNewQueueSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySetNewQueueRequest extends SpeakeasyBase {
    request: SyncPlaySetNewQueueRequests;
    security: SyncPlaySetNewQueueSecurity;
}
export declare class SyncPlaySetNewQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
