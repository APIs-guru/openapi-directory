import { SpeakeasyBase } from "../../../internal/utils";
import { ValueMapValEntry } from "./valuemapvalentry";
/**
 * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
**/
export declare class Value extends SpeakeasyBase {
    fpVal?: number;
    intVal?: number;
    mapVal?: ValueMapValEntry[];
    stringVal?: string;
}
