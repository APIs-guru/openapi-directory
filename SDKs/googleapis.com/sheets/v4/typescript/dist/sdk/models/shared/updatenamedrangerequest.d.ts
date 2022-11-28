import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRange } from "./namedrange";
/**
 * Updates properties of the named range with the specified namedRangeId.
**/
export declare class UpdateNamedRangeRequest extends SpeakeasyBase {
    fields?: string;
    namedRange?: NamedRange;
}
