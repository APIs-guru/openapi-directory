import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
export declare class BadRequest extends SpeakeasyBase {
    hints?: ErrorMessage[];
    message?: string;
    status?: string;
}
