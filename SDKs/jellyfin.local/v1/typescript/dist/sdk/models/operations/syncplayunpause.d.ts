import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayUnpauseSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayUnpauseRequest extends SpeakeasyBase {
    security: SyncPlayUnpauseSecurity;
}
export declare class SyncPlayUnpauseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
