import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * Request message for PresentationsService.BatchUpdatePresentation.
**/
export declare class BatchUpdatePresentationRequest extends SpeakeasyBase {
    requests?: Request[];
    writeControl?: WriteControl;
}
