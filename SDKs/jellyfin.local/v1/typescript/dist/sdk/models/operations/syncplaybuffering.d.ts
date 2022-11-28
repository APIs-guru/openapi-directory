import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayBufferingRequests extends SpeakeasyBase {
    bufferRequestDto?: shared.BufferRequestDto;
    bufferRequestDto1?: shared.BufferRequestDto;
    bufferRequestDto2?: shared.BufferRequestDto;
}
export declare class SyncPlayBufferingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayBufferingRequest extends SpeakeasyBase {
    request: SyncPlayBufferingRequests;
    security: SyncPlayBufferingSecurity;
}
export declare class SyncPlayBufferingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
