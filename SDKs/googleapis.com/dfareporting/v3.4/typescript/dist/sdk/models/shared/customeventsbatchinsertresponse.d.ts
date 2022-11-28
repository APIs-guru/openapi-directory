import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEventStatus } from "./customeventstatus";
/**
 * Insert Custom Events Response.
**/
export declare class CustomEventsBatchInsertResponse extends SpeakeasyBase {
    hasFailures?: boolean;
    kind?: string;
    status?: CustomEventStatus[];
}
