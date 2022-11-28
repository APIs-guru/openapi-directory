import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
**/
export declare class Option extends SpeakeasyBase {
    name?: string;
    value?: Map<string, any>;
}
