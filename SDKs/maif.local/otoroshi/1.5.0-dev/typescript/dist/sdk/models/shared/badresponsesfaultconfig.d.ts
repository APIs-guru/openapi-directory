import { SpeakeasyBase } from "../../../internal/utils";
import { BadResponse } from "./badresponse";
/**
 * Config for bad requests injection fault
**/
export declare class BadResponsesFaultConfig extends SpeakeasyBase {
    ratio: number;
    responses: BadResponse[];
}
