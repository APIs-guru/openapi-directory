import { SpeakeasyBase } from "../../../internal/utils";
import { RequestInput } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * A batch of updates to perform on a form. All the specified updates are made or none of them are.
**/
export declare class BatchUpdateFormRequestInput extends SpeakeasyBase {
    includeFormInResponse?: boolean;
    requests?: RequestInput[];
    writeControl?: WriteControl;
}
