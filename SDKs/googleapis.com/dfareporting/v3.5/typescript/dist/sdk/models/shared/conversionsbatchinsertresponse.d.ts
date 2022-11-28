import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionStatus } from "./conversionstatus";
/**
 * Insert Conversions Response.
**/
export declare class ConversionsBatchInsertResponse extends SpeakeasyBase {
    hasFailures?: boolean;
    kind?: string;
    status?: ConversionStatus[];
}
