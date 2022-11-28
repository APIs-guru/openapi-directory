import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySeekRequests extends SpeakeasyBase {
    seekRequestDto?: shared.SeekRequestDto;
    seekRequestDto1?: shared.SeekRequestDto;
    seekRequestDto2?: shared.SeekRequestDto;
}
export declare class SyncPlaySeekSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySeekRequest extends SpeakeasyBase {
    request: SyncPlaySeekRequests;
    security: SyncPlaySeekSecurity;
}
export declare class SyncPlaySeekResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
