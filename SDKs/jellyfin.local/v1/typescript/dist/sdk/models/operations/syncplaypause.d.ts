import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayPauseSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayPauseRequest extends SpeakeasyBase {
    security: SyncPlayPauseSecurity;
}
export declare class SyncPlayPauseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
