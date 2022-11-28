import { SpeakeasyBase } from "../../../internal/utils";
import { SessionInput } from "./session";
/**
 * The request for BatchCreateSessions.
**/
export declare class BatchCreateSessionsRequestInput extends SpeakeasyBase {
    sessionCount?: number;
    sessionTemplate?: SessionInput;
}
