import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayStopSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayStopRequest extends SpeakeasyBase {
    security: SyncPlayStopSecurity;
}
export declare class SyncPlayStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
