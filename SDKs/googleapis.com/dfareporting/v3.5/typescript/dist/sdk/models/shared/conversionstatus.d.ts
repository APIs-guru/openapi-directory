import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { ConversionError } from "./conversionerror";
/**
 * The original conversion that was inserted or updated and whether there were any errors.
**/
export declare class ConversionStatus extends SpeakeasyBase {
    conversion?: Conversion;
    errors?: ConversionError[];
    kind?: string;
}
