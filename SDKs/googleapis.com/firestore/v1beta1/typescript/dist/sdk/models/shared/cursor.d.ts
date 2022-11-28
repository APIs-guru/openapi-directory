import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A position in a query result set.
**/
export declare class Cursor extends SpeakeasyBase {
    before?: boolean;
    values?: Value[];
}
