import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySetShuffleModeRequests extends SpeakeasyBase {
    setShuffleModeRequestDto?: shared.SetShuffleModeRequestDto;
    setShuffleModeRequestDto1?: shared.SetShuffleModeRequestDto;
    setShuffleModeRequestDto2?: shared.SetShuffleModeRequestDto;
}
export declare class SyncPlaySetShuffleModeSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySetShuffleModeRequest extends SpeakeasyBase {
    request: SyncPlaySetShuffleModeRequests;
    security: SyncPlaySetShuffleModeSecurity;
}
export declare class SyncPlaySetShuffleModeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
