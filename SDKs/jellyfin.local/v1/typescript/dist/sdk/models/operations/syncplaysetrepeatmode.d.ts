import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlaySetRepeatModeRequests extends SpeakeasyBase {
    setRepeatModeRequestDto?: shared.SetRepeatModeRequestDto;
    setRepeatModeRequestDto1?: shared.SetRepeatModeRequestDto;
    setRepeatModeRequestDto2?: shared.SetRepeatModeRequestDto;
}
export declare class SyncPlaySetRepeatModeSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlaySetRepeatModeRequest extends SpeakeasyBase {
    request: SyncPlaySetRepeatModeRequests;
    security: SyncPlaySetRepeatModeSecurity;
}
export declare class SyncPlaySetRepeatModeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
