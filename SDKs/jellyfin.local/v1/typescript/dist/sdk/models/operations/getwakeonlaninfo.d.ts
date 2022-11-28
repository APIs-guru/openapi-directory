import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWakeOnLanInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetWakeOnLanInfoRequest extends SpeakeasyBase {
    security: GetWakeOnLanInfoSecurity;
}
export declare class GetWakeOnLanInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wakeOnLanInfos?: shared.WakeOnLanInfo[];
}
