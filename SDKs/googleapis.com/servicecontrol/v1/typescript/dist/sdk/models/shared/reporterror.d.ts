import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";
/**
 * Represents the processing error of one Operation in the request.
**/
export declare class ReportError extends SpeakeasyBase {
    operationId?: string;
    status?: Status;
}
