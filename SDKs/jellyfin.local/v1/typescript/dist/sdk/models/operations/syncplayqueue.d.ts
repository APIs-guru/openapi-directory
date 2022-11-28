import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayQueueRequests extends SpeakeasyBase {
    queueRequestDto?: shared.QueueRequestDto;
    queueRequestDto1?: shared.QueueRequestDto;
    queueRequestDto2?: shared.QueueRequestDto;
}
export declare class SyncPlayQueueSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayQueueRequest extends SpeakeasyBase {
    request: SyncPlayQueueRequests;
    security: SyncPlayQueueSecurity;
}
export declare class SyncPlayQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
