import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * State common to all model types. Includes publishing and validation information.
**/
export declare class ModelState extends SpeakeasyBase {
    published?: boolean;
    validationError?: Status;
}
