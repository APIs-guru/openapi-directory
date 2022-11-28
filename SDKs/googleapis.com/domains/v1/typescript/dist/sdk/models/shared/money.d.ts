import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an amount of money with its currency type.
**/
export declare class Money extends SpeakeasyBase {
    currencyCode?: string;
    nanos?: number;
    units?: string;
}
