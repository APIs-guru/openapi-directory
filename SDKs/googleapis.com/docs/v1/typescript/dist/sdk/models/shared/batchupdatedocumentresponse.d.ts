import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response message from a BatchUpdateDocument request.
**/
export declare class BatchUpdateDocumentResponse extends SpeakeasyBase {
    documentId?: string;
    replies?: Response[];
    writeControl?: WriteControl;
}
