import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response message from a batch update.
**/
export declare class BatchUpdatePresentationResponse extends SpeakeasyBase {
    presentationId?: string;
    replies?: Response[];
    writeControl?: WriteControl;
}
