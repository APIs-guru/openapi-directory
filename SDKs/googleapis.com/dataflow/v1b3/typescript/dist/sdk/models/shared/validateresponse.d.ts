import { SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";
/**
 * Response to the validation request.
**/
export declare class ValidateResponse extends SpeakeasyBase {
    errorMessage?: string;
    queryInfo?: QueryInfo;
}
