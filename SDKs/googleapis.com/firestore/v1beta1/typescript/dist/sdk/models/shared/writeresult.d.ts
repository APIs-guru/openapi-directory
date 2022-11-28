import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * The result of applying a write.
**/
export declare class WriteResult extends SpeakeasyBase {
    transformResults?: Value[];
    updateTime?: string;
}
