import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";
import { Source } from "./source";
/**
 * Specification of rules.
**/
export declare class Rule extends SpeakeasyBase {
    destinations?: Destination[];
    sources?: Source[];
}
