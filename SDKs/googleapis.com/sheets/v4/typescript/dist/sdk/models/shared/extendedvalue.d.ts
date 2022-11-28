import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorValue } from "./errorvalue";
/**
 * The kinds of value that a cell in a spreadsheet can have.
**/
export declare class ExtendedValue extends SpeakeasyBase {
    boolValue?: boolean;
    errorValue?: ErrorValue;
    formulaValue?: string;
    numberValue?: number;
    stringValue?: string;
}
