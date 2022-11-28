import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * Request message for BatchUpdateDocument.
**/
export declare class BatchUpdateDocumentRequest extends SpeakeasyBase {
    requests?: Request[];
    writeControl?: WriteControl;
}
