import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedRange } from "./protectedrange";
/**
 * Updates an existing protected range with the specified protectedRangeId.
**/
export declare class UpdateProtectedRangeRequest extends SpeakeasyBase {
    fields?: string;
    protectedRange?: ProtectedRange;
}
