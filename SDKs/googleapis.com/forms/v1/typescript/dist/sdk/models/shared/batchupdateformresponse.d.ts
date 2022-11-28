import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response to a BatchUpdateFormRequest.
**/
export declare class BatchUpdateFormResponse extends SpeakeasyBase {
    form?: Form;
    replies?: Response[];
    writeControl?: WriteControl;
}
