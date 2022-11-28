import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * Request to schedule an export.
**/
export declare class ExportMessagesRequest extends SpeakeasyBase {
    endTime?: string;
    gcsDestination?: GcsDestination;
    startTime?: string;
}
